from tonsdk.contract.wallet import Wallets, WalletVersionEnum
import asyncio
from pytonlib import TonlibClient
from tonsdk.utils import to_nano
import requests
from pathlib import Path
from config import mnemonics  # your mnemonics phrase ['', '', ... , '']


mnemonics, pub_k, priv_k, wallet = Wallets.from_mnemonics(mnemonics=mnemonics,
                                                          version=WalletVersionEnum.v3r2, workchain=0)
wallet_address = wallet.address.to_string(True, True, True, True)


async def get_seqno(client: TonlibClient, address: str):
    data = await client.raw_run_method(method='seqno', stack_data=[], address=wallet_address)
    return int(data['stack'][0][1], 16)


async def main():
    url = 'https://ton.org/testnet-global.config.json'

    config = requests.get(url).json()

    keystore_dir = '/tmp/ton_keystore'
    Path(keystore_dir).mkdir(parents=True, exist_ok=True)

    client = TonlibClient(ls_index=1, config=config, keystore=keystore_dir, tonlib_timeout=15)

    await client.init()
    seqno = await get_seqno(client, wallet_address)
    transfer_query = wallet.create_transfer_message(to_addr='kQAW_oj9B8UWSvKh5uPAViMHRiXd2t-mxQ1ZEZlFby2R9Eub',
                                                    amount=to_nano(1, 'ton'),
                                                    seqno=seqno, payload='transfer success')

    transfer_message = transfer_query['message'].to_boc(False)

    await client.raw_send_message(transfer_message)


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
