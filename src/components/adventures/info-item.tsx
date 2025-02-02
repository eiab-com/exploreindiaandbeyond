const InfoItem = ({ title, value }: { title: string; value: string }) => (
  <div className="flex justify-between py-2 border-b">
    <span className="text-muted-foreground">{title}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default InfoItem;
