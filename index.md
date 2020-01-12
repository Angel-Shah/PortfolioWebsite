<!DOCTYPE html>
<html>
<head>

<script src="myScript.js"></script>
<title>Angel Shah</title>

<link rel="stylesheet" href="style.css">

</head>
<body>
        <div class="container">
          

            <div class="backgroundVid">
                <video src = "vid.mp4" autoplay loop muted ></video>
            </div>

            <!-- <div class="nameHeader">
                    <h1>Hi, I'm</h1>
                    <div class="name">
                            <h1>Angel</h1>
                    </div> -->
                    <div class="nametag"  >
                        <h1>Hi, I'm</h1>
                        <h2 id="name" style="visibility: hidden;">Angel</h2>

                    </div>
            
            <div class="links" id="Rezbutton" style="visibility:hidden">
                
                <div class="firstsq"><a  href="resume.pdf" target ="_blank">1</a></div>
                <div class="secondsq"><a type="button"  onclick="showPan2()">2</a>
                
                </div>
                <div class="thirdsq"><a >3</a></div>
                <div class="fourthsq"><a type="button"  onclick="showPan3()">4</a></div>
                <div class="fifthsq"><a type="button"  onclick="showPan4()" >5</a></div>

                <!-- The Panel stuff starts here -->
                <div id="pan2" class="panel2">
                    panel 2: content
                    <button type="button" onclick="goHome()">Back</button>
                </div>
                <div id="pan3" class="panel3">panel 3: content</div>
                <div id="pan4" class="panel4">panel 4: content</div>

            </div>
  
        
        
   
</body>

</html>