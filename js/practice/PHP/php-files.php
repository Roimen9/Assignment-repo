<?php
    // DEfine the file path
    $file_path = 'data.txt';

    // A function to display file content
    function displayFileContent($file_path) {
        if (file_exists($file_path)) {
            $file_content = file_get_contents($file_path);
            echo "<div class='file-content'><h2>File Content:</h2><pre>$file_content</pre></div>"
        } else {
            echo "<p class='error'>File does not exist </p>"
        }
    }
    // A function to save content to the file
    function saveContentToFile($file_path, $content) {
        if (file_put_contents($file_path, $content)) {
            echo "<div class='success'>Content saved to the file succesfully </div>"
        } else{
            echo "<p class='error'>Error occurred while saving content to the file</p>"
        }
    }

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $content = $_POST['content'];
        saveContentToFile($file_path, $content)
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple File App</title>

<style>
    body {
        font-family:sans-serif;
        margin: 20px;
    }

    h1, h2 {
        color:white;
    }

    .file-content {
        background-color: #f4f4f4;
        padding: 20px;
        border: 1px solid #ddd;
    }

    textarea {
        width:100%;
        height: 150px;
        padding: 10px;
        font: size 10px;
        border: 1px solid #ccc;
        border: radius 4px;
        box-sizing:border-box;
        resizing:vertical;
    }

    input[type='sumbit'] {
       
    }
</style>

</head>
<body>
    <h1>Simple File App</h1>

    <?php displayFileContent($file_path); ?>

    <h2>Enter Content</h2>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>"method = "POST">
    <textarea name="content" rows = "5" cols = "30"></textarea><br>
    <input type="submit" value="Save Content">
    </form>
</body>
</html>