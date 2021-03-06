package com.stackroute.playerrecommendationservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/*As in this class we are implementing Swagger So annotate the class with @Configuration and 
 * @EnableSwagger2
 * 
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket getAPIDocker() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.stackroute.playerrecommendationservice.controller"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiMetaInfo());
				
	}
	
	private ApiInfo apiMetaInfo() {
		return new ApiInfo("Cric App Recommendation service RESTful APIs", "Cric App Recommendation service RESTful APIs", "1.0", 
				           "http://www.stackroute.com", "StackRoute Admin", "Apache 2.0", "https://www.apache.org/licenses/LICENSE-2.0");
	}

}