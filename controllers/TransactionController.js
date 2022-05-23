import Transaction from "../models/Transaction.js";

export const getAllTransation = (req, res) => {
    Transaction.findAndCountAll().then(({ count, rows }) => {
        const msg = 'La liste comporte ' + count + ' transactions';
        res.json({
            msg, data: rows
        })
    }).catch(error => {
        console.log(error.message)
    })
}

export const getTransationById = async (req, res) => {
    Transaction.findOne({
        where: {
            id_trans: parseInt(req.params.id)
        }
    }).then(data => {
        const message = 'La transaction a été bien trouvée';
        res.status(200).json({ message, data: data })
    }).catch(error => {
        console.log(error.message)
    })
}

export const createTransaction = (req, res) => {
    Transaction.create(req.body)
        .then(transaction => {
            const message = "La transaction a été bien effectuée";
            res.status(201).json({ message, data: transaction });
        }).catch(error => {
            console.log("L'erreur : ", error.message);
        })
}

export const deleteTransaction = async (req, res) => {
    try {
        await Transaction.destroy({
            where: {
                id_trans: parseInt(req.params.id)
            }
        });
        res.status(200).json({msg: `La transaction a été bien supprimée`})
    } catch (error) {
        console.log('error.message')
    }

}