import { AccountSettingsForm } from "@/components/account-settings-form";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field } from "@/components/ui/field";

export default function Home() {
	return (
		<main>
			<Card className="mx-8 my-16 w-full max-w-4xl gap-8">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						Manage Your Account
					</CardTitle>
					<CardDescription>
						Update your account details below for a tailored
						experience on our platform.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<AccountSettingsForm />
				</CardContent>
			</Card>
		</main>
	);
}
