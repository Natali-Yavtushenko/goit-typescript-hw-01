export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

type UserRolesStatuses = Record<UserRole, boolean>;

const UserRolesStatuses: UserRolesStatuses = {
  [UserRole.admin]: true,
  [UserRole.editor]: true,
  [UserRole.guest]: false,
};
