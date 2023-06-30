import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';
import axios from 'axios';
const Checklist = require('@editorjs/checklist');
const Quote = require('@editorjs/quote');
const SimpleImage = require('@editorjs/simple-image');

const editor = new EditorJs({
    holderId: 'editorjs',

    tools: {
        header: {
            class: Header, 
            inlineToolbar: ['link'] 
          },
        list: { 
            class: List, 
            inlineToolbar: [
                'link',
                'bold'
            ] 
        }, 

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: Quote,
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            },
        },
        // image: SimpleImage,
        image: {
            class: ImageTool,
            config: {
              /**
               * Custom uploader
               */
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByFile(file){
                  // your own uploading logic here
                  return MyAjax.upload(file).then(() => {
                    return {
                      success: 1,
                      file: {
                        url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                        // any other image data you want to store, such as width, height, color, extension, etc
                      }
                    };
                  });
                },
      
                /**
                 * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                 * @param {string} url - pasted image URL
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByUrl(url){
                  // your ajax request for uploading
                  return MyAjax.upload(file).then(() => {
                    return {
                      success: 1,
                      file: {
                        url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                        // any other image data you want to store, such as width, height, color, extension, etc
                      }
                    }
                  })
                }
              }
            }
          }

        
    }
})


let saveBtn = document.querySelector('button');
 
saveBtn.addEventListener('click', function(){
    editor.save().then((outputData)=>{
        console.log('Blog data: ',outputData)
    }).catch((error) => {
        console.log('saving failed: ', error)
    });
})


