// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://raw.githubusercontent.com/pipiorange030/pipiads/refs/heads/main/css.css" type="text/css">'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body: body })
