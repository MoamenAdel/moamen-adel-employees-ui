import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: File | undefined ; // Variable to store file
  fileUploadConfig: AngularFileUploaderConfig | undefined;



	ngOnInit(): void {
    this.fileUploadConfig = {
			multiple: false,
			formatsAllowed: ".txt",
			maxSize: 512,
			uploadAPI: {
				url:  "http://localhost:8080/files",
				method: "POST",


				withCredentials: false,
			},
			theme: "dragNDrop",
			hideProgressBar: false,
			hideResetBtn: false,
			hideSelectBtn: false,
			fileNameIndex: false,
			autoUpload: true,
			replaceTexts: {
				selectFileBtn: 'Choose File ..',
				resetBtn: 'Cancel',
				uploadBtn: 'Upload',
				dragNDropBox: 'Drag & drop here',
				attachPinBtn: 'Attached File...',
				afterUploadMsg_success: 'Uploaded Successfully !',
				afterUploadMsg_error: 'Failed !',
				sizeLimit: 'Max Size'
			}
		};
	}
	}


