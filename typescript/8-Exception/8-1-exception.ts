// Error (exception) handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error (`file not exist! ${fileName}`)
  }
  return 'file contents'
}

function closeFile(fileName: string) {

}

const fileName = 'not exist!';

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log('catched!')
} finally {
  closeFile(fileName)
  console.log('finally')
}