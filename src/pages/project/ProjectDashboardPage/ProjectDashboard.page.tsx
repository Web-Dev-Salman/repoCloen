import React, { useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Table, { TBody, Td, TFoot, Th, THead, Tr } from '../../../components/ui/Table';
import Card, { CardBody } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/ui/Dropdown';
import Checkbox, { CheckboxGroup } from '../../../components/form/Checkbox';

type Person = {
	CheckBox: string;
	Jurisdiction: string;
	Organization: string;
	FacilityName: string;
	Address: string;
	State: string;
	ZipCode: number;
	Action: null;
};

const defaultData: Person[] = [
	{
		CheckBox: <Checkbox />,
		Jurisdiction: 'Michigan-JD1',
		Organization: 'CVS Pharmacy',
		FacilityName: 'Troy',
		Address: '123 Mian',
		City: 'Troy',
		State: 'MI',
		ZipCode: 48098,
		Action: '',
	},
	{
		CheckBox: <Checkbox />,
		Jurisdiction: 'Michigan-JD1',
		Organization: 'CVS Pharmacy',
		FacilityName: 'Rochester Hills',
		Address: '123 Mian',
		City: 'Troy',
		State: 'MI',
		ZipCode: 48098,
		Action: '',
	},
	{
		CheckBox: <Checkbox />,
		Jurisdiction: 'Michigan-JD1',
		Organization: 'CVS Pharmacy',
		FacilityName: 'Auburn Hills',
		Address: '123 Mian',
		City: 'Troy',
		State: 'MI',
		ZipCode: 48098,
		Action: '',
	},
	{
		CheckBox: <Checkbox />,
		Jurisdiction: 'Michigan-JD1',
		Organization: 'CVS Pharmacy',
		FacilityName: 'Madison Heights',
		Address: '123 Mian',
		City: 'Troy',
		State: 'MI',
		ZipCode: 48098,
		Action: '',
	},
	{
		CheckBox: <Checkbox />,
		Jurisdiction: 'Michigan-JD1',
		Organization: 'CVS Pharmacy',
		FacilityName: 'Royal Oak',
		Address: '123 Mian',
		City: 'Troy',
		State: 'MI',
		ZipCode: 48098,
		Action: '',
	},
];

const columnHelper = createColumnHelper<Person>();

const columns = [
	columnHelper.accessor('CheckBox', {
		cell: (info) => <span className='capitalize'>{info.getValue()}</span>,
		header: () => <Checkbox />,
		footer: () => <Checkbox />,
	}),
	columnHelper.accessor('Jurisdiction', {
		cell: (info) => <span className='capitalize'>{info.getValue()}</span>,
		header: () => 'Jurisdiction',
		footer: () => 'Jurisdiction',
	}),

	columnHelper.accessor('Organization', {
		cell: (info) => <span className='capitalize'>{info.getValue()}</span>,
		header: () => 'Organization',
		footer: () => 'Organization ',
	}),
	columnHelper.accessor('FacilityName', {
		cell: (info) => <span className='capitalize'>{info.getValue()}</span>,
		header: () => 'Facility Name',
		footer: () => 'Facility Name',
	}),
	columnHelper.accessor('Address', {
		cell: (info) => <span className='capitalize'>{info.renderValue()}</span>,
		header: () => 'Address',
		footer: () => 'Address',
	}),
	columnHelper.accessor('City', {
		header: () => 'City',
		footer: () => 'City',
	}),
	columnHelper.accessor('State', {
		header: () => 'State',
		footer: () => 'State',
	}),
	columnHelper.accessor('ZipCode', {
		header: () => 'ZipCode',
		footer: () => 'ZipCode',
	}),
	columnHelper.accessor('Action', {
		header: () => 'Action',
		footer: () => 'Action',
	}),
];

const SiteManagement = () => {
	const [data] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<Card className='m-5'>
			<CardBody>
				<Button variant='outline' color='zinc' icon='Plus' className='m-2'>
					Add New
				</Button>
				<Table>
					<THead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Th key={header.id} className='text-left'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
									</Th>
								))}
							</Tr>
						))}
					</THead>
					<TBody>
						{table.getRowModel().rows.map((row) => (
							<Tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<Td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Td>
								))}
							</Tr>
						))}
					</TBody>
					<TFoot>
						{table.getFooterGroups().map((footerGroup) => (
							<Tr key={footerGroup.id}>
								{footerGroup.headers.map((header) => (
									<Th key={header.id} className='text-left'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.footer,
													header.getContext(),
											  )}
									</Th>
								))}
							</Tr>
						))}
					</TFoot>
				</Table>
				<Button variant='outline' color='zinc' icon='Plus' className='m-2'>
					Add New
				</Button>
			</CardBody>
		</Card>
	);
};

export default SiteManagement;
