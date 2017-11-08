<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<p>What do you call it when a programmer throws up at IHOP?</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo">Answer</p>

<script>
function myFunction() { 
    document.getElementById("demo").innerHTML = "A stack overflow";
}
</script>

</body>
</html>
