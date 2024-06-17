<?php 

    // Database Connection Details
    $hostname = "";
    $username = "";
    $password = "";
    $dbname = "crud_db";

    // Create a connection to the database
    $conn = my_sqli_connect($hostname, $username, $password,$dbname);
    if (my_sqli_connect_error()) {
        die("Connection Failed.".my_sqli_connect_error())
    }
    // Check if the connection is successful

    // CRUD functions

    // Create 
    // Read
    // Update
    // Delete

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD with PHP and MySQL</title>
</head>
<body>
    <h1>CRUD with PHP and MySQL</h1>

    <h2>Create/Update user</h2>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        Name: <input type="text" name="name" required><br>
        Email: <input type="email" name="email" required><br>
        <input type="submit" value="Create/Update">
    </form>
</body>
</html>