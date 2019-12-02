package util;

public class Body {
	String username;
	String password;

	public String getVar(String key) {
		switch (key) {
		case "username":
			return username;
		case "password":
			return password;
		default:
			return "";
		}
	}
}
