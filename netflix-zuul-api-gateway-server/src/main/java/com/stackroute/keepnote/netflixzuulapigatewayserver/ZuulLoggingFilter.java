package com.stackroute.keepnote.netflixzuulapigatewayserver;


import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

import static com.sun.corba.se.spi.presentation.rmi.StubAdapter.request;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/*
 * Implement zuul logging filter by extending zuul filter
 */
@Component
public class ZuulLoggingFilter extends ZuulFilter{

	private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public String filterType() {
       return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() throws ZuulException{
//        HttpServletRequest httpRequest = RequestContext.getCurrentContext().getRequest();
//        	
//		
//		
//		String authHeader = httpRequest.getHeader("authorization");
//		System.out.println("AuthHeader" +  authHeader);
//		if(authHeader == null || !authHeader.startsWith("Bearer")) {
//			throw new ZuulException("Invalid login",1,"Invalid login");
//		}
                return null;
    }

	
}
