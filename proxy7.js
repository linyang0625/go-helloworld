pipy()
.listen(9090)
  .demuxHTTP('forward')
.pipeline('forward')
  .muxHTTP('connection', '')
.pipeline('connection')
  .connect('localhost:19090')