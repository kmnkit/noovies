import React, { useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigations/Tabs";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await new Promise((resolve) => setTimeout(resolve, 500));
			} catch (e) {
				console.warn(e);
			} finally {
				await SplashScreen.hideAsync();
				setIsReady(true);
			}
		}
		prepare();
	}, []);

	// const isDark = useColorScheme() === "dark";

	if (!isReady) {
		return null;
	}

	return (
		<NavigationContainer>
			<Tabs />
			<StatusBar style={"light"} />
		</NavigationContainer>
	);
}
