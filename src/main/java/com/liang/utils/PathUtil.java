package com.liang.utils;

import java.io.IOException;

public class PathUtil {
	
	private static String commonPath;	//公共路径
	private static String serverPath;	//服务器路径
	//获取公共路径
	public static String getCommonPath() {
		//获得tomcat的安装路径
		serverPath=System.getProperty("catalina.home");
		System.out.println("tomcat的安装路径为："+serverPath);
		//公共路径=tomgcat的安装路径+webapps
		commonPath = serverPath +PropertyUtil.getPropertiesPath().getProperty("webapps");
		return commonPath;
	}
	
	//帖子图片保存路径
	public static String getArticlePath() {
	
		return PropertyUtil.getPropertiesPath().getProperty("articlePath");
	}

	//用户头像保存路径

	public static String getUserPath() {
		
		return PropertyUtil.getPropertiesPath().getProperty("userPath");
	}

	/**
	 * 
	 * @功能描述:获取GeoLite2-City.mmdb文件全路径 
	 * @return String
	 * @author:maliang
	 * @date 2018年10月22日 下午8:43:48
	 * @修改日志：
	 */
	public static String getGeoLite2City() {
		
		return PropertyUtil.getPropertiesPath().getProperty("geoLite2City");
	}
}
