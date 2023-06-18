//EQAW_oj9B8UWSvKh5uPAViMHRiXd2t-mxQ1ZEZlFby2R9PAR

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json',
  buttonRootId: 'connect-button-root'
});

tonConnectUI.onStatusChange(console.log);

const btn_send_tx = document.getElementById('btn_send_tx');

btn_send_tx.addEventListener('click', async () => {
  const input_address = document.getElementById("input_address").value;
  const input_amount = document.getElementById("input_amount").value;
  if (input_address == "") {
    const notification = document.querySelector('.notification');
    const closeButton = document.querySelector('.close-button');
    const span = document.getElementById("message");
    span.innerHTML = "Address is empty";
    closeButton.addEventListener('click', () => {
      notification.style.display = 'none';
    });
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 7000);
    return;
  }
  if (input_amount == '' || input_amount == 0) {
    const notification = document.querySelector('.notification');
    const closeButton = document.querySelector('.close-button');
    const span = document.getElementById("message");
    span.innerHTML = "Amount is empty";
    closeButton.addEventListener('click', () => {
      notification.style.display = 'none';
    });
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 7000);
    return;
  }
  const transaction = {
    validUntil: Date.now() + 1000000,
    messages: [
        {
            address: input_address,
            amount: (input_amount*1000000000).toString(),
        },
    ]
}

try {
    const result = await tonConnectUI.sendTransaction(transaction);

    const someTxData = await myAppExplorerService.getTransaction(result.boc);
    alert('Transaction was sent successfully', someTxData);
} catch (e) {
    console.error(e);
}
document.getElementById("input_address").value = "";
document.getElementById("input_amount").value = "";
});
