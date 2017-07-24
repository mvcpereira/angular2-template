
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.type';
import { ExternalRequestService } from '../shared/external-request.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {

    userList: User[];
    userDetail: User;
    hideUserList: boolean;
    hideUserDetail: boolean;
    showSuccessMessage: boolean = false;
    showErrorMessage: boolean = false;

    constructor(private service: ExternalRequestService) {

    }

    ngOnInit() {
        this.displayList();
        this.updateUserList();
    }

    updateUserList() {
        this.service.getAllRecords().then(list => this.userList = list);
    }

    onSubmit() {
        console.log('submited for id=' + this.userDetail.idUser);
        this.hideMessages();
        if (this.userDetail.idUser > 0)
        {
            this.service.updateUser(this.userDetail).then(() => { this.updateUserList(); this.displaySuccessMessage() }).catch(() => this.displayErrorMessage());
        } else {
            this.service.insertUser(this.userDetail).then(() => { this.updateUserList(); this.displaySuccessMessage() }).catch(() => this.displayErrorMessage());
        }
        
        this.displayList();
    }

    hideMessages() {
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
    }

    displayErrorMessage()
    {
        this.showErrorMessage = true;
    }

    displaySuccessMessage() {
        this.showSuccessMessage = true;
    }

    cancelEdit() {
        this.displayList();
        this.userDetail = new User();
    }

    addUser() {
        this.displayDetails();
        this.userDetail = new User();
    }

    getUserDetails(id: number)
    {
        this.displayDetails();
        this.service.getRecordById(id).then(data => this.userDetail = data);
    }

    displayDetails() {
        this.hideUserList = true;
        this.hideUserDetail = false;
    }

    displayList() {
        this.hideUserList = false;
        this.hideUserDetail = true;
    }
}
