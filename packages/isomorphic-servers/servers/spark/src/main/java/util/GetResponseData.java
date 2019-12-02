package util;

import com.google.gson.Gson;

import spark.Request;

public class GetResponseData {
	static Gson gson = new Gson();

	public static String getQueryParams(Request request, String key) {
		return request.queryParams(key);
	}

	public static String getHeaderParams(Request request, String key) {
		return request.headers(key);
	}

	public static String getBodyParams(Request request, String key) {
		String body = request.body();
		try {
			Body object = gson.fromJson(body, Body.class);
			return object.getVar(key);
		} catch (Exception e) {
		}
		return null;
	}

}
