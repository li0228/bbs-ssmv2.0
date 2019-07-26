<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>管理员(后台)</title>
    <%
        pageContext.setAttribute("APP_PATH", request.getContextPath());
    %>

    <link href="${APP_PATH }/static/bootstrap/css/bootstrap.css" rel="stylesheet" />
    <link href="${APP_PATH }/static/css/base.css" rel="stylesheet" />
</head>
<body>
<jsp:include page="/content/content.jsp"></jsp:include>
</body>
</html>