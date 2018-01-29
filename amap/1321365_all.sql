DROP TABLE IF EXISTS  `data_reg`;
CREATE TABLE `data_reg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `y` int(11) NOT NULL DEFAULT '0',
  `m` tinyint(4) NOT NULL DEFAULT '0',
  `d` tinyint(4) NOT NULL DEFAULT '0',
  `count` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8 COMMENT='注册统计';



DROP TABLE IF EXISTS  `gps_cache`;
CREATE TABLE `gps_cache` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` char(20) NOT NULL,
  `latitude` char(15) NOT NULL,
  `longitude` char(15) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `orientation` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0为无状态  1为正程 2为返程',
  PRIMARY KEY (`id`),
  UNIQUE KEY `device_id` (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1981796905 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS  `gps_collection`;
CREATE TABLE `gps_collection` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `device_id` char(20) NOT NULL,
  `latitude` char(15) NOT NULL,
  `longitude` char(15) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `orientation` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0为无状态  1为正程 2为返程',
  `device_int_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`device_int_id`),
  KEY `device_id` (`device_id`),
  KEY `device_int_id` (`device_int_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2082998965 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC KEY_BLOCK_SIZE=8
/*!50100 PARTITION BY HASH (device_int_id)
PARTITIONS 100 */;



DROP TABLE IF EXISTS  `lenwotion_anywalking_city_stop_list`;
CREATE TABLE `lenwotion_anywalking_city_stop_list` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `city_id` varchar(10) NOT NULL,
  `holder_name` varchar(200) NOT NULL,
  `terminal_stop` varchar(100) NOT NULL,
  `stop_list` varchar(5000) NOT NULL,
  `stop_list_return` varchar(5000) NOT NULL,
  `one_way_fare` varchar(100) NOT NULL DEFAULT '待定',
  `positive_forward_run_time` varchar(30) NOT NULL,
  `nagative_forward_run_time` varchar(30) NOT NULL,
  `line_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0.正常线路 1.高峰线 2.单程线 3.环形线',
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `city_holder` (`city_id`,`holder_name`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4781 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS  `lenwotion_anywalking_city_stop_list_backup`;
CREATE TABLE `lenwotion_anywalking_city_stop_list_backup` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `city_id` varchar(10) NOT NULL,
  `holder_name` varchar(200) NOT NULL,
  `terminal_stop` varchar(100) NOT NULL,
  `stop_list` varchar(5000) NOT NULL,
  `stop_list_return` varchar(5000) NOT NULL,
  `one_way_fare` varchar(100) NOT NULL,
  `positive_forward_run_time` varchar(30) NOT NULL,
  `nagative_forward_run_time` varchar(30) NOT NULL,
  `line_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0.正常线路 1.高峰线 2.单程线 3.环形线',
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `city_holder` (`city_id`,`holder_name`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3252 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS  `lenwotion_anywalking_city_stop_list_backup_20140816`;
CREATE TABLE `lenwotion_anywalking_city_stop_list_backup_20140816` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `city_id` varchar(10) NOT NULL,
  `holder_name` varchar(200) NOT NULL,
  `terminal_stop` varchar(100) NOT NULL,
  `stop_list` varchar(5000) NOT NULL,
  `stop_list_return` varchar(5000) NOT NULL,
  `one_way_fare` varchar(100) NOT NULL DEFAULT '待定',
  `positive_forward_run_time` varchar(30) NOT NULL,
  `nagative_forward_run_time` varchar(30) NOT NULL,
  `line_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0.正常线路 1.高峰线 2.单程线 3.环形线',
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `city_holder` (`city_id`,`holder_name`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4206 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS  `login_data`;
CREATE TABLE `login_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `y` smallint(6) NOT NULL DEFAULT '0',
  `m` tinyint(4) NOT NULL DEFAULT '0',
  `d` tinyint(4) NOT NULL DEFAULT '0',
  `tf` smallint(6) NOT NULL DEFAULT '0' COMMENT '二十一点至五点',
  `fe` smallint(6) NOT NULL DEFAULT '0' COMMENT '五点至九点',
  `nt` smallint(6) NOT NULL DEFAULT '0' COMMENT '九点至十三点',
  `ts` smallint(6) NOT NULL DEFAULT '0' COMMENT '十三至十七点',
  `st` smallint(6) NOT NULL DEFAULT '0' COMMENT '十七至二十一点',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=521 DEFAULT CHARSET=utf8 COMMENT='登录统计';

DROP TABLE IF EXISTS  `suggestion`;
CREATE TABLE `suggestion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_id` varchar(8) NOT NULL,
  `content` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 未处理  1 已处理',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phone_num` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=479 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS  `ticket`;
CREATE TABLE `ticket` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` char(12) NOT NULL COMMENT '参与者',
  `ticket` tinyint(3) unsigned NOT NULL DEFAULT '3' COMMENT 'web票',
  `appticket` tinyint(3) unsigned NOT NULL DEFAULT '3' COMMENT 'app票',
  `appnote` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1908 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS  `user`;
CREATE TABLE `user` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `phone_num` varchar(20) DEFAULT NULL COMMENT '用户账号',
  `password` varchar(40) DEFAULT NULL COMMENT '密码',
  `phone_place` varchar(90) DEFAULT NULL COMMENT '归属地',
  `login_times` int(12) DEFAULT NULL COMMENT '登录频繁度',
  `create_time` datetime DEFAULT NULL COMMENT '注册时间',
  `invite` varchar(12) DEFAULT NULL,
  `integral` int(11) DEFAULT '0',
  `firstshare` tinyint(4) DEFAULT '1',
  `nickname` varchar(11) DEFAULT '',
  `setsex` tinyint(4) DEFAULT NULL,
  `setage` tinyint(4) DEFAULT NULL,
  `detailcity` varchar(30) DEFAULT NULL,
  `setdetailcity` tinyint(4) DEFAULT NULL,
  `wachat` varchar(20) DEFAULT '',
  `setwachat` tinyint(4) DEFAULT NULL,
  `idiograph` varchar(50) DEFAULT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `age` varchar(6) DEFAULT NULL,
  `longtitude` varchar(20) DEFAULT NULL COMMENT '经度',
  `latitude` varchar(20) DEFAULT NULL COMMENT '纬度',
  `nowcity` varchar(30) DEFAULT NULL COMMENT '实时城市',
  `isfull` varchar(1) DEFAULT NULL COMMENT '判断个人资料是后完整',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26172 DEFAULT CHARSET=utf8 COMMENT='引路人用户';

DROP TABLE IF EXISTS  `user_sms`;
CREATE TABLE `user_sms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_num` varchar(15) NOT NULL COMMENT '号码',
  `verify` varchar(8) NOT NULL COMMENT '验证码',
  `times` tinyint(4) NOT NULL COMMENT '每天可以进行验证的次数',
  `availability_time` int(11) NOT NULL COMMENT '验证码的有效时间',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建该条记录或者是进行更改的时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_num` (`phone_num`)
) ENGINE=InnoDB AUTO_INCREMENT=10943 DEFAULT CHARSET=utf8 COMMENT='引路人短信验证表';

DROP TABLE IF EXISTS  `vote`;
CREATE TABLE `vote` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `titleid` int(10) DEFAULT NULL,
  `item` varchar(100) DEFAULT NULL,
  `count` int(10) DEFAULT NULL,
  `src` varchar(120) DEFAULT NULL COMMENT '音乐链接',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/* PROCEDURES */;
DROP PROCEDURE IF EXISTS `buffer_to_collection`;
DELIMITER $$
CREATE PROCEDURE `buffer_to_collection`()
begin
insert into gps_collection(device_id,latitude,longitude,created,orientation,device_int_id) (select device_id,latitude,longitude,created,orientation,device_int_id from gps_buffers); 
truncate table gps_buffers;
end
$$
DELIMITER ;

/* TRIGGERS */;
DROP TRIGGER IF EXISTS `insert_gps_cache`;
DELIMITER $$
CREATE TRIGGER `insert_gps_cache` 
AFTER INSERT  ON db9p584c3vp9b005.gps_cache
 FOR EACH ROW  
begin
set @newDeviceId=new.device_id;
set @newlatitude=new.latitude;
set @newlongitude=new.longitude;
set @newOrientation=new.orientation;
set @newDeviceIntId=substr(new.device_id,3,instr(new.device_id,'-')-1)*1000000+substr(new.device_id,instr(new.device_id,'-')+1);
insert into gps_buffers(device_id,latitude,longitude,orientation,device_int_id)values(@newDeviceId,@newlatitude,@newlongitude,@newOrientation,@newDeviceIntId);
end
$$
DELIMITER ;

