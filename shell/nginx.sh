#!/bin/bash

yum install nginx
# 启动
systemctl start nginx.service
# 开机启动
systemctl enable nginx.service
