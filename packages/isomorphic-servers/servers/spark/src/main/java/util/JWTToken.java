package util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTToken {
	static String secretKey = "secretKey";
	static long expiredAfter = 60 * 60 * 1000;
	static SignatureAlgorithm algo = SignatureAlgorithm.HS512;

	public static String getToken(String username, String id) {
		return Jwts.builder().claim("username", username).claim("id", id)
				.claim("expiredAt", System.currentTimeMillis() + expiredAfter).signWith(algo, secretKey).compact();

	}

	public static boolean checkExpirity(String token) {
		try {
			Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
			if ((Long) claims.get("expiredAt") > System.currentTimeMillis()) {
				return true;
			}
		} catch (Exception e) {
		}
		return false;
	}

}
