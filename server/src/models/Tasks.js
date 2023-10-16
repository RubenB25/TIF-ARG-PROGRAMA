import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TaskModel = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW, 
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('createdAt');
            const formattedDate = new Date(rawValue).toLocaleString('es-AR', {
                timeZone: 'America/Argentina/Buenos_Aires',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            });
            return formattedDate;
        }
    },
}, {
    timestamps: true
}
)
