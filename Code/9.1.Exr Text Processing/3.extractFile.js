function extraxtFile(arr) {
    let fileParts = arr.split('\\');
    let fileInfo = fileParts.pop();
    let lastDotIndex = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.substring(0, lastDotIndex);
    let fileExtension = fileInfo.substring(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extraxtFile('C:\\Internal\\training-internal\\Template.pptx');