alter table PLD_ORDER add constraint FK_PLD_ORDER_CUSTOMER foreign key (CUSTOMER_ID) references PLD_CUSTOMER(ID);
create index IDX_PLD_ORDER_CUSTOMER on PLD_ORDER (CUSTOMER_ID);
