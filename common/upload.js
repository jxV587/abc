import Request from './request.js'

let request = new Request();

export default function(file, fn) {
    let size = file.size,
    ext = file.name.substring(file.name.lastIndexOf('.') + 1);
    let spark = new SparkMD5.ArrayBuffer();
    let reader = new FileReader(); //只能用于ie10及以上的
  
    reader.onload = function(evt) {
        spark.append(evt.target.result);

        request.get({
            url:'/v1/cms/upload',
            params: { "digest": spark.end(), "length": size, "extension": ext },
            callback(_data) {
                $.AMUI.progress.start();
                $.ajax({
                    url: _data.Upload,
                    type: 'PUT',
                    cache: false,
                    data: evt.target.result,
                    processData: false,
                    contentType: false,
                    // beforeSend: function(xhrObj) {
                    //     for (let i = 0, l = _data.headersList.length; i < l; i++) {
                    //         let hd = _data.headersList[i].split(":");
                    //         xhrObj.setRequestHeader(hd[0], hd[1]);
                    //     }
                    // },
                    success: function() {
                        fn(_data.Public);
                    },
                    error: function(data) {
                        alert('上传失败，请重新操作');
                    },
                    complete: function(xhr) {
                        $.AMUI.progress.done();
                    }
                });
            }
        });
    }
    reader.readAsArrayBuffer(file);
}