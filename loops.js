function forLoop(array){
  for (i = 0; i <25; i++){
    if (i = 1){
      array[1] = "I am 1 strange loop."
    }
    else{
      array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    }
  }
}
