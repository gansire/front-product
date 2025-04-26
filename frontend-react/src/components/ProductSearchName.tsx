export default function ProductSearchName ({ value, onChange }: { value: string; onChange: (val: string) => void }){
    return (
        <input
          type="text"
          placeholder="Buscar produto..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    );
}