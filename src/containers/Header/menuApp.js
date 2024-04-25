export const adminMenu = [
    { //Quan ly nguoi dung
        name: 'menu.admin.manage-user', 
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            
        ]
    },
    { //Quản lý phòng khám
        name: 'menu.admin.clinic', 
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
        ]
    },
    { //Quản lý Chuyên khoa
        name: 'menu.admin.specialty', 
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
        ]
    },
    { //Quản lý Cẩm nang
        name: 'menu.admin.handbook', 
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook' 
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
        ]
    },
];