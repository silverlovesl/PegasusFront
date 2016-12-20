import { Component, OnInit } from '@angular/core';
import {SideMenu} from '../../interface/side-menu';
import {SideMenuItem} from '../../interface/side-menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sideMenu:SideMenu[];

  constructor() { }

  ngOnInit() {
    this.sideMenu = [
      {menuId:"001",menuName:"在庫管理",iconName:"fa ui-icon-3d-rotation",items:[
        {menuId:"001",menuItemId:"0001",menuItemName:"テスト1"},
        {menuId:"001",menuItemId:"0002",menuItemName:"テスト２"},
        {menuId:"001",menuItemId:"0003",menuItemName:"テスト３"},
        {menuId:"001",menuItemId:"0004",menuItemName:"テスト４"},
        {menuId:"001",menuItemId:"0005",menuItemName:"テスト５"},
        {menuId:"001",menuItemId:"0006",menuItemName:"テスト６"}]
      },
      {menuId:"002",menuName:"財務帳票",iconName:"fa ui-icon-move-to-inbox",items:[
        {menuId:"002",menuItemId:"0001",menuItemName:"テスト1"},
        {menuId:"002",menuItemId:"0002",menuItemName:"テスト２"},
        {menuId:"002",menuItemId:"0003",menuItemName:"テスト３"},
        {menuId:"002",menuItemId:"0004",menuItemName:"テスト４"},
        {menuId:"002",menuItemId:"0005",menuItemName:"テスト５"},
        {menuId:"002",menuItemId:"0006",menuItemName:"テスト６"}]
      },
      {menuId:"003",menuName:"システムユーザー",iconName:"fa ui-icon-pan-tool",items:[
        {menuId:"002",menuItemId:"0001",menuItemName:"テスト1"},
        {menuId:"002",menuItemId:"0002",menuItemName:"テスト２"},
        {menuId:"002",menuItemId:"0003",menuItemName:"テスト３"},
        {menuId:"002",menuItemId:"0004",menuItemName:"テスト４"},
        {menuId:"002",menuItemId:"0005",menuItemName:"テスト５"},
        {menuId:"002",menuItemId:"0006",menuItemName:"テスト６"}]
      }
    ];
  }
}
