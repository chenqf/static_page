#!/bin/bash


# 文章手顺：https://blog.csdn.net/qq_36582604/article/details/80526287

wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm


yum -y install mysql57-community-release-el7-10.noarch.rpm


yum -y install mysql-community-server


# 启动MySql
# systemctl start  mysqld.service


# 查看mysql 状态
# systemctl status mysqld.service


# 找出root用户密码
# grep "password" /var/log/mysqld.log


# 进入数据库
# mysql -uroot -p

# 修改密码 需要大小写字母和特殊字符 
# mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';


# 开启远程访问
# mysql> grant all privileges on *.* to 'root'@'%' identified by 'yout_password' with grant option;
# mysql> flush privileges; 
# mysql> exit