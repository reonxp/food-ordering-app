import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type UpdateStoreFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const UpdateStoreFormLayout = (props: UpdateStoreFormLayoutProps) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>
                    <h3 className="text-green-700">Store Setting</h3>
                </CardTitle>
                <CardDescription>DDDes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {children}
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form="update-store-form">
                    {isPending ? 'Updating...' : 'Update'}
                </Button>
            </CardFooter>
        </Card>
    );
};