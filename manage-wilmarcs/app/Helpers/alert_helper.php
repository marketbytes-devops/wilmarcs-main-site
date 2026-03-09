<?php
use Firebase\JWT\JWT;
function alerttag($message,$class,$noclosecls=''){
	return '<div class="'.$noclosecls.' alert bg-'.$class.'-100 border border-'.$class.'-400 text-'.$class.'-700 px-4 py-3 mb-4 rounded relative" role="alert"><span class="block sm:text-sm text-xs sm:inline">'.$message.'</span><span class="absolute top-0 bottom-0 right-0 sm:px-4 sm:py-3 closebtn"><svg class="fill-current sm:h-6 sm:w-6 h-4 w-4 text-'.$class.'-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg></span></div>';
}
function alerttagb($message,$class){
    return '<div class="cusalert alert alert-'.$class.'">'.$message.'</div>';
}
function getJWTtoken($uid) {
    $key = getenv('JWT_SECRET');
    $iat = time();
    $exp = $iat + 3600;
    
    $payload = array(
        "iss" => "Wilmarcs",
        "aud" => "WilmarcsUsers",
        "sub" => "WilmarcsApp",
        "iat" => $iat,
        "exp" => $exp,
        "uid" => $uid,
    );
    
    return JWT::encode($payload, $key, 'HS256');
}

function getTags($table, $column, $pk){
    $query   = "WITH RECURSIVE cte AS (
                    SELECT ".$pk.", TRIM(SUBSTRING_INDEX(".$column.", ',', 1)) AS tag, 
                            SUBSTRING(".$column.", LENGTH(SUBSTRING_INDEX(".$column.", ',', 1)) + 2) AS rest
                    FROM ".$table."

                    UNION ALL

                    SELECT ".$pk.", TRIM(SUBSTRING_INDEX(rest, ',', 1)) AS tag,
                            SUBSTRING(rest, LENGTH(SUBSTRING_INDEX(rest, ',', 1)) + 2)
                    FROM cte
                    WHERE rest <> ''
                )
                SELECT DISTINCT tag
                FROM cte
                WHERE tag <> '';";
    return \Config\Database::connect()->query($query)->getResult();
}