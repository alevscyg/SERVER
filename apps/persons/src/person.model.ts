import { Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript";


interface PersonsCreationAttr {
    id: number;
    photo: string;
    name: string;
    enName: string;
    profession: string;
    enProfession: string;
}

@Table({tableName: "persons", createdAt: false, updatedAt: false})
export class Persons extends Model<Persons, PersonsCreationAttr> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER})
    movieId: number;

    @Column({type: DataType.STRING})
    photo: string;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    enName: string;

    @Column({type: DataType.STRING})
    profession: string;

    @Column({type: DataType.STRING})
    enProfession: string;
}