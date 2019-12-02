package util;

import org.eclipse.jetty.http.*;
import spark.*;
import java.util.*;
import com.google.gson.Gson;

public class ViewUtil {
	static Gson gson = new Gson();

	public static String authorized(Request request, Response response, Map<String, String> model) {
		response.status(HttpStatus.ACCEPTED_202);
		return gson.toJson(model);
	}

	public static String unAuthorized(Request request, Response response) {
		response.status(HttpStatus.UNAUTHORIZED_401);
		Map<String, String> model = new HashMap<>();
		model.put("error", "unAuthorized");
		return gson.toJson(model);
	}

	public static Response testResponse(Request request, Response response, Map<String, String> model) {
		response.status(HttpStatus.OK_200);
		response.body(gson.toJson(model));
		return response;
	}

	public static Route notFound = (request, response) -> {
		response.status(HttpStatus.UNAUTHORIZED_401);
		Map<String, String> model = new HashMap<>();
		model.put("error", "unAuthorized");
		response.body(gson.toJson(model));
		return response;
	};

}
