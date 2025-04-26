import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api/axios';
import { apiRoutes } from '../api/routes';
import { useCategoryContext } from '../context/CategoryContext';

export default function ProductForm() {
    const {category, setCategory} = useCategoryContext();
    const [selected, setSelected] = useState<string>("");
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === '0';
    type ProductFormType = {
        name: string;
        price: number;
        qty: number;
        photo: string;
        categoryId: string;
    }
    const [form, setForm] = useState<ProductFormType>({
        name: '', 
        price: 0, 
        qty: 0, 
        photo: '', 
        categoryId: "" 
    });

    useEffect(() => {
        if (!isNew) {
            api.get(`${apiRoutes.product}/${id}`)
                .then(res => {
                    const existing = res.data;
                    setForm({
                        name: existing.name,
                        price: existing.price,
                        qty: existing.qty,
                        photo: existing.photo,
                        categoryId: existing.categoryId,
                    });
                    setSelected(existing.categoryId);
                })
                .catch(err => console.error('Erro ao buscar produto:', err));
        }
    }, [id, isNew]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = event.target.value;
        setForm((prev) =>({
            ...prev,
            categoryId: selectedCategoryId
        }))
    };

    const handleSubmit = async  (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isNew) {
                await api.post(apiRoutes.product, form, {
                headers: {
                    'Content-Type': 'application/json'
                }});
    
               
            } else {
                await api.patch(`${apiRoutes.product}/${id}`, form, {
                    headers: {
                      'Content-Type': 'application/json'
                    }}
                )
            }
            navigate('/product');
        } catch (error) {
            console.error('Erro ao enviar:', error);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-input">
                <label>Nome</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
            </div>

            <div className="form-input">
                <label>Preço</label>
                <input
                    type="number"
                    value={form.price || ''}
                    onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
                />
            </div>

            <div className="form-input">
                <label>Quantidade</label>
                <input
                    type="number"
                    value={form.qty || ''}
                    onChange={(e) => setForm({ ...form, qty: parseInt(e.target.value) })}
                />
            </div>

            <div className="form-input">
                <label>Foto (URL)</label>
                <input
                    type="text"
                    value={form.photo}
                    onChange={(e) => setForm({ ...form, photo: e.target.value })}
                />
            </div>
            <div className="form-input">
                <label htmlFor='options'>Escolha uma categoria:</label>
                <select id='options' value={form.categoryId} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    {
                        category.map((category) => 
                        <option  key={category.id} value={category.id}>
                            {category.name}
                        </option>)
                    }
                </select>
            </div>
            <button className='submit-btn'>{isNew ? 'Adicionar' : 'Atualizar'}</button>

        </form>
    );
}
