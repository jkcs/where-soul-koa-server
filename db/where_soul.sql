/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : where_soul

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2019-07-19 17:47:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `tag_id` int(11) DEFAULT NULL COMMENT '标签id',
  `type_id` int(11) DEFAULT NULL COMMENT '类型id',
  `status` bit(1) NOT NULL DEFAULT b'0' COMMENT '0 收入 1 支出',
  `money` decimal(10,0) NOT NULL,
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for bill_tag
-- ----------------------------
DROP TABLE IF EXISTS `bill_tag`;
CREATE TABLE `bill_tag` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `user_id` int(255) DEFAULT NULL COMMENT '用户id， 有为用户自定义标签',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for bill_type
-- ----------------------------
DROP TABLE IF EXISTS `bill_type`;
CREATE TABLE `bill_type` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL COMMENT '父类型id',
  `name` varchar(255) DEFAULT NULL COMMENT '类型名称',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` varchar(255) NOT NULL COMMENT '手机号码',
  `header` varchar(255) DEFAULT NULL COMMENT '头像',
  `gender` bit(11) DEFAULT NULL COMMENT '性别 0 女 1 男',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
