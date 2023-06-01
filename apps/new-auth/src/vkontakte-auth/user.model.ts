import { Table, Model, Column, HasOne, DataType} from "sequelize-typescript";

interface UserCreationAttr {
    id: string;
    displayName: string;
    refreshToken: string;
}

@Table({tableName: 'vk_users'})
export class VkUser extends Model<VkUser, UserCreationAttr> {

    @Column({type: DataType.STRING, unique: true, allowNull: false, primaryKey: true})
    id: string;

    @Column({type: DataType.STRING, allowNull: false})
    displayName: string;

    @Column({type: DataType.STRING, allowNull: false})
    refreshToken: string;
}