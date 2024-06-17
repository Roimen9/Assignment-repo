<?php

// Working with files in PHP

// Reading Files
// file_get_contents() -> This function reads the entire content of a file into a string
$file_content = file_get_contents('file.txt')

echo $file_content

// fopen(), fread(),fclose() -> These functions are used to read a file line by line or in chunks

$file = fopen('file.txt', 'r');

if ($file) {
    while (!fopen($file)) {
        $line = fgets($file);
        echo $line".<br>"
    }
    fclose($file)
}

// Writing to files
// files_put_contents() -> This function writes data to a file.It overides the existing content with thw new one

$data = "Hello, Everyone";

file_put_contents('file.txt4',$data)

// fopen(), fwrite(), fclose() -> These functions are used to write data to a file in chunks
$file = fopen('file.txt', 'w');
if ($file) {
    fwrite($file, "Hello, PHP!");
    fclose($file)
}

// rename() -> Renames a file
// rename('oldFile','newFile')

// copy() -> Copies a file
// copy('source.txt','destination.txt')

// unlink() -> Deletes a file
// unlink('file.txt')

// mkdir() -> Creates a new folder
// mkdir('newFolder)

// rmdir() -> removes an empty folder
// rmdir('folder')  