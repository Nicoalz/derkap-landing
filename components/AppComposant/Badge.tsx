import clsx from "clsx";

export default function Badge({ status }: { status: string }) {
  const statusColorMap: { [key: string]: string } = {
    posting: 'bg-orange',
    voting: 'bg-yellow-400',
    ended: 'bg-gray-400',
  };

  const getStatusLabel = ({
    status,
  }: {
    status: string;
  }) => {
    if (status === 'posting') return 'En cours';
    else if (status === 'voting') return 'En votes';
    else if (status === 'ended') return 'Terminé';
    return 'Pas de défi';
  };

  return (
<div
      className={clsx(
        'rounded-md px-2.5 py-0.5 text-xs font-semibold text-white w-fit',
        statusColorMap[status] || 'bg-gray-400'
      )}
    >
      <p className="text-center font-sans text-nowrap">{getStatusLabel({status})}</p>
    </div>
  );
}
