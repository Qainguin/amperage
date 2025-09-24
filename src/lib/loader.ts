export async function loadFolderToFS(): Promise<void> {
	const folderToLoad = (window as any).showDirectoryPicker();

	console.log(folderToLoad);
}
