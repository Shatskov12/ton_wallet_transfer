# ton_wallet_transfer Python
Для перевода необходима ваша seed фраза, после испонения скрипта транзакию можно отследить в сканере

![транзакция](ton/tx.png)

# ton_wallet_transfer
![Инерфейс](ton/interface.png)


# Сценарий взаимодействия
# Выбор Кошелька
При нажатии на кнопку connect wallet открывается окно с выбором кошелька из предложенных
![Выбор кошелька](ton/select_wallet.png)

# Подключение
После выбора кошелька, открывается кошелек с подтверждением подключения
![Подключение](ton/connect_wallet.png)

# Ввод данных
Для совершения транзакции необходимо ввсети адрес и количество токенов, если не ввести адресс или количество токенов, то появится ошибка
![Ошибка](ton/empty_address.png)


# Транзакция
При нажатии кнопки send появляется окно ожидания подтверждения транзакции
![Ожидание](ton/waiting_confirm.png)

А в кошельке кнопка подтверждения
![Подтверждение](ton/confirm_in_wallet.png)

# Заверщение транзакции
После завершения транзакции появляется уведомление о ее завершении
![Уведомление о завершении](ton/transaction_confirm.png)
