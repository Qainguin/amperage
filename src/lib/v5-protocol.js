// @ts-nocheck

/**
 * V5 Serial Protocol v0.5.0
 * Copyright 2022-2025 jerrylum <me@jerryio.com>
 */

var AllPackets = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	get PacketEncoder() {
		return PacketEncoder;
	},
	get Packet() {
		return Packet;
	},
	get DeviceBoundPacket() {
		return DeviceBoundPacket;
	},
	get Query1H2DPacket() {
		return Query1H2DPacket;
	},
	get SystemVersionH2DPacket() {
		return SystemVersionH2DPacket;
	},
	get UpdateMatchModeH2DPacket() {
		return UpdateMatchModeH2DPacket;
	},
	get GetMatchStatusH2DPacket() {
		return GetMatchStatusH2DPacket;
	},
	get GetRadioModeH2DPacket() {
		return GetRadioModeH2DPacket;
	},
	get FileControlH2DPacket() {
		return FileControlH2DPacket;
	},
	get InitFileTransferH2DPacket() {
		return InitFileTransferH2DPacket;
	},
	get ExitFileTransferH2DPacket() {
		return ExitFileTransferH2DPacket;
	},
	get WriteFileH2DPacket() {
		return WriteFileH2DPacket;
	},
	get ReadFileH2DPacket() {
		return ReadFileH2DPacket;
	},
	get LinkFileH2DPacket() {
		return LinkFileH2DPacket;
	},
	get GetDirectoryFileCountH2DPacket() {
		return GetDirectoryFileCountH2DPacket;
	},
	get GetDirectoryEntryH2DPacket() {
		return GetDirectoryEntryH2DPacket;
	},
	get LoadFileActionH2DPacket() {
		return LoadFileActionH2DPacket;
	},
	get GetFileMetadataH2DPacket() {
		return GetFileMetadataH2DPacket;
	},
	get SetFileMetadataH2DPacket() {
		return SetFileMetadataH2DPacket;
	},
	get EraseFileH2DPacket() {
		return EraseFileH2DPacket;
	},
	get GetProgramSlotInfoH2DPacket() {
		return GetProgramSlotInfoH2DPacket;
	},
	get FileClearUpH2DPacket() {
		return FileClearUpH2DPacket;
	},
	get FileFormatH2DPacket() {
		return FileFormatH2DPacket;
	},
	get GetSystemFlagsH2DPacket() {
		return GetSystemFlagsH2DPacket;
	},
	get GetDeviceStatusH2DPacket() {
		return GetDeviceStatusH2DPacket;
	},
	get GetSystemStatusH2DPacket() {
		return GetSystemStatusH2DPacket;
	},
	get GetFdtStatusH2DPacket() {
		return GetFdtStatusH2DPacket;
	},
	get GetLogCountH2DPacket() {
		return GetLogCountH2DPacket;
	},
	get ReadLogPageH2DPacket() {
		return ReadLogPageH2DPacket;
	},
	get GetRadioStatusH2DPacket() {
		return GetRadioStatusH2DPacket;
	},
	get GetUserDataH2DPacket() {
		return GetUserDataH2DPacket;
	},
	get ScreenCaptureH2DPacket() {
		return ScreenCaptureH2DPacket;
	},
	get SendDashTouchH2DPacket() {
		return SendDashTouchH2DPacket;
	},
	get SelectDashH2DPacket() {
		return SelectDashH2DPacket;
	},
	get EnableDashH2DPacket() {
		return EnableDashH2DPacket;
	},
	get DisableDashH2DPacket() {
		return DisableDashH2DPacket;
	},
	get ReadKeyValueH2DPacket() {
		return ReadKeyValueH2DPacket;
	},
	get WriteKeyValueH2DPacket() {
		return WriteKeyValueH2DPacket;
	},
	get GetSlot1to4InfoH2DPacket() {
		return GetSlot1to4InfoH2DPacket;
	},
	get GetSlot5to8InfoH2DPacket() {
		return GetSlot5to8InfoH2DPacket;
	},
	get FactoryStatusH2DPacket() {
		return FactoryStatusH2DPacket;
	},
	get FactoryEnableH2DPacket() {
		return FactoryEnableH2DPacket;
	},
	get HostBoundPacket() {
		return HostBoundPacket;
	},
	get Query1ReplyD2HPacket() {
		return Query1ReplyD2HPacket;
	},
	get SystemVersionReplyD2HPacket() {
		return SystemVersionReplyD2HPacket;
	},
	get MatchModeReplyD2HPacket() {
		return MatchModeReplyD2HPacket;
	},
	get MatchStatusReplyD2HPacket() {
		return MatchStatusReplyD2HPacket;
	},
	get FileControlReplyD2HPacket() {
		return FileControlReplyD2HPacket;
	},
	get InitFileTransferReplyD2HPacket() {
		return InitFileTransferReplyD2HPacket;
	},
	get ExitFileTransferReplyD2HPacket() {
		return ExitFileTransferReplyD2HPacket;
	},
	get WriteFileReplyD2HPacket() {
		return WriteFileReplyD2HPacket;
	},
	get ReadFileReplyD2HPacket() {
		return ReadFileReplyD2HPacket;
	},
	get LinkFileReplyD2HPacket() {
		return LinkFileReplyD2HPacket;
	},
	get GetDirectoryFileCountReplyD2HPacket() {
		return GetDirectoryFileCountReplyD2HPacket;
	},
	get GetDirectoryEntryReplyD2HPacket() {
		return GetDirectoryEntryReplyD2HPacket;
	},
	get LoadFileActionReplyD2HPacket() {
		return LoadFileActionReplyD2HPacket;
	},
	get GetFileMetadataReplyD2HPacket() {
		return GetFileMetadataReplyD2HPacket;
	},
	get SetFileMetadataReplyD2HPacket() {
		return SetFileMetadataReplyD2HPacket;
	},
	get EraseFileReplyD2HPacket() {
		return EraseFileReplyD2HPacket;
	},
	get GetProgramSlotInfoReplyD2HPacket() {
		return GetProgramSlotInfoReplyD2HPacket;
	},
	get FileClearUpReplyD2HPacket() {
		return FileClearUpReplyD2HPacket;
	},
	get FileFormatReplyD2HPacket() {
		return FileFormatReplyD2HPacket;
	},
	get GetSystemFlagsReplyD2HPacket() {
		return GetSystemFlagsReplyD2HPacket;
	},
	get GetDeviceStatusReplyD2HPacket() {
		return GetDeviceStatusReplyD2HPacket;
	},
	get GetSystemStatusReplyD2HPacket() {
		return GetSystemStatusReplyD2HPacket;
	},
	get GetFdtStatusReplyD2HPacket() {
		return GetFdtStatusReplyD2HPacket;
	},
	get GetLogCountReplyD2HPacket() {
		return GetLogCountReplyD2HPacket;
	},
	get ReadLogPageReplyD2HPacket() {
		return ReadLogPageReplyD2HPacket;
	},
	get GetRadioStatusReplyD2HPacket() {
		return GetRadioStatusReplyD2HPacket;
	},
	get GetUserDataReplyD2HPacket() {
		return GetUserDataReplyD2HPacket;
	},
	get ScreenCaptureReplyD2HPacket() {
		return ScreenCaptureReplyD2HPacket;
	},
	get SendDashTouchReplyD2HPacket() {
		return SendDashTouchReplyD2HPacket;
	},
	get SelectDashReplyD2HPacket() {
		return SelectDashReplyD2HPacket;
	},
	get EnableDashReplyD2HPacket() {
		return EnableDashReplyD2HPacket;
	},
	get DisableDashReplyD2HPacket() {
		return DisableDashReplyD2HPacket;
	},
	get ReadKeyValueReplyD2HPacket() {
		return ReadKeyValueReplyD2HPacket;
	},
	get WriteKeyValueReplyD2HPacket() {
		return WriteKeyValueReplyD2HPacket;
	},
	get GetSlot1to4InfoReplyD2HPacket() {
		return GetSlot1to4InfoReplyD2HPacket;
	},
	get GetSlot5to8InfoReplyD2HPacket() {
		return GetSlot5to8InfoReplyD2HPacket;
	},
	get FactoryStatusReplyD2HPacket() {
		return FactoryStatusReplyD2HPacket;
	},
	get FactoryEnableReplyD2HPacket() {
		return FactoryEnableReplyD2HPacket;
	}
});

const USER_PROG_CHUNK_SIZE = 4096; // chunk size
const USER_FLASH_START = 0x03000000; // start address of memory
const USER_FLASH_SYS_CODE_START = 0x03400000; // start address of system code
const USER_FLASH_USR_CODE_START = 0x03800000; // start address of user code
const USER_FLASH_END = 0x08000000; // end address of memory
const USER_FLASH_MAX_FILE_SIZE = 0x200000; // maximum file size for qspi
const USER_FLASH_START_B = 0x10200000; // special app flash start
const USER_FLASH_END_B = 0x10400000; // special app flash end
const USER_FLASH_START_C = 0x30200000; // special app flash start
const USER_FLASH_END_C = 0x31000000; // special app flash end
var FileVendor;
(function (FileVendor) {
	FileVendor[(FileVendor['USER'] = 1)] = 'USER';
	FileVendor[(FileVendor['SYS'] = 15)] = 'SYS';
	FileVendor[(FileVendor['DEV1'] = 16)] = 'DEV1';
	FileVendor[(FileVendor['DEV2'] = 24)] = 'DEV2';
	FileVendor[(FileVendor['DEV3'] = 32)] = 'DEV3';
	FileVendor[(FileVendor['DEV4'] = 40)] = 'DEV4';
	FileVendor[(FileVendor['DEV5'] = 48)] = 'DEV5';
	FileVendor[(FileVendor['DEV6'] = 56)] = 'DEV6';
	FileVendor[(FileVendor['VEXVM'] = 64)] = 'VEXVM';
	FileVendor[(FileVendor['VEX'] = 240)] = 'VEX';
	FileVendor[(FileVendor['UNDEFINED'] = 241)] = 'UNDEFINED';
})(FileVendor || (FileVendor = {}));
var FileDownloadTarget;
(function (FileDownloadTarget) {
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_DDR'] = 0)] = 'FILE_TARGET_DDR';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_QSPI'] = 1)] = 'FILE_TARGET_QSPI';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_CBUF'] = 2)] = 'FILE_TARGET_CBUF';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_VBUF'] = 3)] = 'FILE_TARGET_VBUF';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_DDRC'] = 4)] = 'FILE_TARGET_DDRC';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_DDRE'] = 5)] = 'FILE_TARGET_DDRE';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_FLASH'] = 6)] = 'FILE_TARGET_FLASH';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_RADIO'] = 7)] = 'FILE_TARGET_RADIO';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_A1'] = 13)] = 'FILE_TARGET_A1';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_B1'] = 14)] = 'FILE_TARGET_B1';
	FileDownloadTarget[(FileDownloadTarget['FILE_TARGET_B2'] = 15)] = 'FILE_TARGET_B2';
})(FileDownloadTarget || (FileDownloadTarget = {}));
var FileInitAction;
(function (FileInitAction) {
	FileInitAction[(FileInitAction['WRITE'] = 1)] = 'WRITE';
	FileInitAction[(FileInitAction['READ'] = 2)] = 'READ';
})(FileInitAction || (FileInitAction = {}));
var FileInitOption;
(function (FileInitOption) {
	FileInitOption[(FileInitOption['NONE'] = 0)] = 'NONE';
	FileInitOption[(FileInitOption['OVERWRITE'] = 1)] = 'OVERWRITE';
})(FileInitOption || (FileInitOption = {}));
var FileLoadAction;
(function (FileLoadAction) {
	FileLoadAction[(FileLoadAction['RUN'] = 0)] = 'RUN';
	FileLoadAction[(FileLoadAction['STOP'] = 128)] = 'STOP';
})(FileLoadAction || (FileLoadAction = {}));
var FileExitAction;
(function (FileExitAction) {
	FileExitAction[(FileExitAction['EXIT_NONE'] = 0)] = 'EXIT_NONE';
	FileExitAction[(FileExitAction['EXIT_RUN'] = 1)] = 'EXIT_RUN';
	FileExitAction[(FileExitAction['EXIT_HALT'] = 3)] = 'EXIT_HALT';
})(FileExitAction || (FileExitAction = {}));
var RadioChannelType;
(function (RadioChannelType) {
	RadioChannelType[(RadioChannelType['PIT'] = 0)] = 'PIT';
	RadioChannelType[(RadioChannelType['DOWNLOAD'] = 1)] = 'DOWNLOAD';
})(RadioChannelType || (RadioChannelType = {}));
var AckType;
(function (AckType) {
	AckType[(AckType['CDC2_ACK'] = 118)] = 'CDC2_ACK';
	AckType[(AckType['CDC2_NACK'] = 255)] = 'CDC2_NACK';
	AckType[(AckType['CDC2_NACK_PACKET_CRC'] = 206)] = 'CDC2_NACK_PACKET_CRC';
	AckType[(AckType['CDC2_NACK_CMD_LENGTH'] = 208)] = 'CDC2_NACK_CMD_LENGTH';
	AckType[(AckType['CDC2_NACK_SIZE'] = 209)] = 'CDC2_NACK_SIZE';
	AckType[(AckType['CDC2_NACK_CRC'] = 210)] = 'CDC2_NACK_CRC';
	AckType[(AckType['CDC2_NACK_FILE'] = 211)] = 'CDC2_NACK_FILE';
	AckType[(AckType['CDC2_NACK_INIT'] = 212)] = 'CDC2_NACK_INIT';
	AckType[(AckType['CDC2_NACK_FUNC'] = 213)] = 'CDC2_NACK_FUNC';
	AckType[(AckType['CDC2_NACK_ALIGN'] = 214)] = 'CDC2_NACK_ALIGN';
	AckType[(AckType['CDC2_NACK_ADDR'] = 215)] = 'CDC2_NACK_ADDR';
	AckType[(AckType['CDC2_NACK_INCOMPLETE'] = 216)] = 'CDC2_NACK_INCOMPLETE';
	AckType[(AckType['CDC2_NACK_DIR_INDEX'] = 217)] = 'CDC2_NACK_DIR_INDEX';
	AckType[(AckType['CDC2_NACK_MAX_USER_FILES'] = 218)] = 'CDC2_NACK_MAX_USER_FILES';
	AckType[(AckType['CDC2_NACK_FILE_EXISTS'] = 219)] = 'CDC2_NACK_FILE_EXISTS';
	AckType[(AckType['CDC2_NACK_FILE_SYS_FULL'] = 220)] = 'CDC2_NACK_FILE_SYS_FULL';
	AckType[(AckType['TIMEOUT'] = 256)] = 'TIMEOUT';
	AckType[(AckType['WRITE_ERROR'] = 257)] = 'WRITE_ERROR';
})(AckType || (AckType = {}));
var SmartDeviceType;
(function (SmartDeviceType) {
	SmartDeviceType[(SmartDeviceType['EMPTY'] = 0)] = 'EMPTY';
	SmartDeviceType[(SmartDeviceType['V5_POWER'] = 1)] = 'V5_POWER';
	SmartDeviceType[(SmartDeviceType['MOTOR'] = 2)] = 'MOTOR';
	SmartDeviceType[(SmartDeviceType['LED'] = 3)] = 'LED';
	SmartDeviceType[(SmartDeviceType['ABS_ENCODER_SENSOR'] = 4)] = 'ABS_ENCODER_SENSOR';
	SmartDeviceType[(SmartDeviceType['CR_MOTOR'] = 5)] = 'CR_MOTOR';
	SmartDeviceType[(SmartDeviceType['IMU_SENSOR'] = 6)] = 'IMU_SENSOR';
	SmartDeviceType[(SmartDeviceType['DISTANCE_SENSOR'] = 7)] = 'DISTANCE_SENSOR';
	SmartDeviceType[(SmartDeviceType['RADIO_SENSOR'] = 8)] = 'RADIO_SENSOR';
	SmartDeviceType[(SmartDeviceType['CONTROLLER'] = 9)] = 'CONTROLLER';
	SmartDeviceType[(SmartDeviceType['BRAIN'] = 10)] = 'BRAIN';
	SmartDeviceType[(SmartDeviceType['VISION_SENSOR'] = 11)] = 'VISION_SENSOR';
	SmartDeviceType[(SmartDeviceType['ADI'] = 12)] = 'ADI';
	SmartDeviceType[(SmartDeviceType['PARTNER_CONTROLLER'] = 13)] = 'PARTNER_CONTROLLER';
	SmartDeviceType[(SmartDeviceType['BATTERY'] = 14)] = 'BATTERY';
	SmartDeviceType[(SmartDeviceType['SOL'] = 15)] = 'SOL';
	SmartDeviceType[(SmartDeviceType['OPTICAL_SENSOR'] = 16)] = 'OPTICAL_SENSOR';
	SmartDeviceType[(SmartDeviceType['MAGNET'] = 17)] = 'MAGNET';
	SmartDeviceType[(SmartDeviceType['GPS_SENSOR'] = 20)] = 'GPS_SENSOR';
	SmartDeviceType[(SmartDeviceType['UNDEFINED_SENSOR'] = 255)] = 'UNDEFINED_SENSOR';
})(SmartDeviceType || (SmartDeviceType = {}));
var SerialDeviceType;
(function (SerialDeviceType) {
	SerialDeviceType[(SerialDeviceType['V5_BRAIN'] = 1281)] = 'V5_BRAIN';
	SerialDeviceType[(SerialDeviceType['V5_BRAIN_DFU'] = 1282)] = 'V5_BRAIN_DFU';
	SerialDeviceType[(SerialDeviceType['V5_CONTROLLER'] = 1283)] = 'V5_CONTROLLER';
	SerialDeviceType[(SerialDeviceType['XILINX'] = 256)] = 'XILINX';
	SerialDeviceType[(SerialDeviceType['IQ_BRAIN'] = 2)] = 'IQ_BRAIN';
	SerialDeviceType[(SerialDeviceType['IQ_BRAIN2'] = 3)] = 'IQ_BRAIN2';
	SerialDeviceType[(SerialDeviceType['IQ_BRAIN_DFU'] = 255)] = 'IQ_BRAIN_DFU';
	SerialDeviceType[(SerialDeviceType['IQ2_BRAIN'] = 512)] = 'IQ2_BRAIN';
	SerialDeviceType[(SerialDeviceType['IQ2_BRAIN_DFU'] = 527)] = 'IQ2_BRAIN_DFU';
	SerialDeviceType[(SerialDeviceType['IQ2_CONTROLLER'] = 528)] = 'IQ2_CONTROLLER';
	SerialDeviceType[(SerialDeviceType['IQ2_CONTROLLER_DFU'] = 543)] = 'IQ2_CONTROLLER_DFU';
	SerialDeviceType[(SerialDeviceType['EXP_BRAIN'] = 1536)] = 'EXP_BRAIN';
	SerialDeviceType[(SerialDeviceType['EXP_BRAIN_DFU'] = 1551)] = 'EXP_BRAIN_DFU';
	SerialDeviceType[(SerialDeviceType['EXP_CONTROLLER'] = 1552)] = 'EXP_CONTROLLER';
	SerialDeviceType[(SerialDeviceType['EXP_CONTROLLER_DFU'] = 1567)] = 'EXP_CONTROLLER_DFU';
	SerialDeviceType[(SerialDeviceType['PIXY'] = 61440)] = 'PIXY';
	SerialDeviceType[(SerialDeviceType['PIXY_DFU'] = 12)] = 'PIXY_DFU';
	SerialDeviceType[(SerialDeviceType['VEXCAM'] = 1287)] = 'VEXCAM';
	SerialDeviceType[(SerialDeviceType['VEXCAM_DFU'] = 1288)] = 'VEXCAM_DFU';
	SerialDeviceType[(SerialDeviceType['SENSOR_TEST'] = 1535)] = 'SENSOR_TEST';
	SerialDeviceType[(SerialDeviceType['CORTEX_PROGCBL'] = 10)] = 'CORTEX_PROGCBL';
	SerialDeviceType[(SerialDeviceType['CORTEX_BRAIN'] = 11)] = 'CORTEX_BRAIN';
	// Jerry says this was copied from the official source code ¯\_(ツ)_/¯
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	SerialDeviceType[(SerialDeviceType['CORTEX_JOYSTK'] = 12)] = 'CORTEX_JOYSTK';
	SerialDeviceType[(SerialDeviceType['VEXNET_KEY_20'] = 7)] = 'VEXNET_KEY_20';
	SerialDeviceType[(SerialDeviceType['VEXNET_KEY_10'] = 9587)] = 'VEXNET_KEY_10';
	SerialDeviceType[(SerialDeviceType['PROLIFIC'] = 8963)] = 'PROLIFIC';
})(SerialDeviceType || (SerialDeviceType = {}));
/**
 * found from {@link https://gist.github.com/meisZWFLZ/9ebdd694060137b44959ff7ac80ff4e8 gist}
 * @see {@link https://drive.google.com/drive/folders/11pSNKakbXp7hOYBQ3HNwprFaLalnXOgR screen images}
 */
var SelectDashScreen;
(function (SelectDashScreen) {
	SelectDashScreen[(SelectDashScreen['HOME'] = 0)] = 'HOME';
	SelectDashScreen[(SelectDashScreen['BATTERY'] = 1)] = 'BATTERY';
	SelectDashScreen[(SelectDashScreen['LED'] = 3)] = 'LED';
	SelectDashScreen[(SelectDashScreen['MATCH_CONFIG'] = 4)] = 'MATCH_CONFIG';
	SelectDashScreen[(SelectDashScreen['MATCH_CONFIG_MORE'] = 5)] = 'MATCH_CONFIG_MORE';
	SelectDashScreen[(SelectDashScreen['WIRING'] = 6)] = 'WIRING';
	SelectDashScreen[(SelectDashScreen['RADIO'] = 8)] = 'RADIO';
	SelectDashScreen[(SelectDashScreen['BRAIN'] = 10)] = 'BRAIN';
	SelectDashScreen[(SelectDashScreen['RUN_PROGRAM'] = 13)] = 'RUN_PROGRAM';
	SelectDashScreen[(SelectDashScreen['DRIVE_PROGRAM_CONTROL_LEFT_MAPPING'] = 14)] =
		'DRIVE_PROGRAM_CONTROL_LEFT_MAPPING';
	SelectDashScreen[(SelectDashScreen['DRIVE_PROGRAM_MENU'] = 15)] = 'DRIVE_PROGRAM_MENU';
	SelectDashScreen[(SelectDashScreen['DEVICES'] = 16)] = 'DEVICES';
	SelectDashScreen[(SelectDashScreen['USER_PROGRAM_FOLDER'] = 17)] = 'USER_PROGRAM_FOLDER';
	SelectDashScreen[(SelectDashScreen['VEX_PROGRAM_FOLDER'] = 18)] = 'VEX_PROGRAM_FOLDER';
	SelectDashScreen[(SelectDashScreen['SETTINGS'] = 19)] = 'SETTINGS';
	/** theres some scary looking stuff in here */
	SelectDashScreen[(SelectDashScreen['SCARY_CONFIGURATION'] = 20)] = 'SCARY_CONFIGURATION';
	SelectDashScreen[(SelectDashScreen['LANGUAGE'] = 21)] = 'LANGUAGE';
	SelectDashScreen[(SelectDashScreen['DRIVE_MOTOR_CONFIG'] = 22)] = 'DRIVE_MOTOR_CONFIG';
	SelectDashScreen[(SelectDashScreen['PROGRAM_MENU'] = 24)] = 'PROGRAM_MENU';
	SelectDashScreen[(SelectDashScreen['SHUTDOWN'] = 25)] = 'SHUTDOWN';
	SelectDashScreen[(SelectDashScreen['CONTROLLER_2_MAPPING'] = 26)] = 'CONTROLLER_2_MAPPING';
	/** theres some even more scary looking stuff in here */
	SelectDashScreen[(SelectDashScreen['SCARY_CONFIGURATION_MORE'] = 27)] =
		'SCARY_CONFIGURATION_MORE';
	/** maybe this is scarier.. */
	SelectDashScreen[(SelectDashScreen['CONFIRM_XX'] = 28)] = 'CONFIRM_XX';
	SelectDashScreen[(SelectDashScreen['CONTROLLER_1_MAPPING'] = 29)] = 'CONTROLLER_1_MAPPING';
	SelectDashScreen[(SelectDashScreen['DRIVE_PROGRAM_CONTROL_DUAL_MAPPING'] = 30)] =
		'DRIVE_PROGRAM_CONTROL_DUAL_MAPPING';
	SelectDashScreen[(SelectDashScreen['DRIVE_PROGRAM_CONTROL_SPLIT_MAPPING'] = 31)] =
		'DRIVE_PROGRAM_CONTROL_SPLIT_MAPPING';
	SelectDashScreen[(SelectDashScreen['DRIVE_PROGRAM_CONTROL_RIGHT_MAPPING'] = 32)] =
		'DRIVE_PROGRAM_CONTROL_RIGHT_MAPPING';
	/** thats such a bad name */
	SelectDashScreen[(SelectDashScreen['MATCH_2_4_PLAYERS'] = 33)] = 'MATCH_2_4_PLAYERS';
	SelectDashScreen[(SelectDashScreen['EVENT_LOG'] = 34)] = 'EVENT_LOG';
	SelectDashScreen[(SelectDashScreen['USER_PROGRAM_WIRING'] = 40)] = 'USER_PROGRAM_WIRING';
	SelectDashScreen[(SelectDashScreen['CLAWBOT_PROGRAM_MENU'] = 41)] = 'CLAWBOT_PROGRAM_MENU';
	/** aka regulatory */
	SelectDashScreen[(SelectDashScreen['ABOUT'] = 42)] = 'ABOUT';
	SelectDashScreen[(SelectDashScreen['LANGUAGE_MORE'] = 43)] = 'LANGUAGE_MORE';
	SelectDashScreen[(SelectDashScreen['OBJECT_COLOR'] = 45)] = 'OBJECT_COLOR';
	SelectDashScreen[(SelectDashScreen['SIGNATURE_ID'] = 46)] = 'SIGNATURE_ID';
	SelectDashScreen[(SelectDashScreen['LOG_DATA'] = 47)] = 'LOG_DATA';
})(SelectDashScreen || (SelectDashScreen = {}));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P
			? value
			: new P(function (resolve) {
					resolve(value);
				});
	}
	return new (P || (P = Promise))(function (resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator['throw'](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}

class VexEventEmitter {
	constructor() {
		this.handlerMap = new Map();
	}
	on(eventName, listener) {
		let listeners = this.handlerMap.get(eventName);
		listeners !== null && listeners !== void 0 ? listeners : (listeners = []);
		listeners.push(listener);
		this.handlerMap.set(eventName, listeners);
	}
	remove(eventName, listener) {
		let listeners = this.handlerMap.get(eventName);
		listeners !== null && listeners !== void 0 ? listeners : (listeners = []);
		const index = listeners.indexOf(listener);
		if (index > -1) {
			listeners.splice(index, 1);
		}
		this.handlerMap.set(eventName, listeners);
	}
	emit(eventName, data) {
		var _a;
		((_a = this.handlerMap.get(eventName)) !== null && _a !== void 0 ? _a : []).forEach(
			(callback) => {
				callback(data);
			}
		);
	}
	clearListeners() {
		this.handlerMap.clear();
	}
}
class VexEventTarget {
	constructor() {
		this.emitter = new VexEventEmitter();
	}
	emit(eventName, data) {
		this.emitter.emit(String(eventName), data);
	}
	on(eventName, listener) {
		this.emitter.on(String(eventName), listener);
	}
	remove(eventName, listener) {
		this.emitter.remove(String(eventName), listener);
	}
	clearListeners() {
		this.emitter.clearListeners();
	}
}

/**
 * This is a class to make it easier to handle passing the VEXos version
 * information around in the application. This provides ways to get any
 * form of the string representation and quickly compare versions.
 */
class VexFirmwareVersion {
	constructor(major, minor, build, beta) {
		this.major = major;
		this.minor = minor;
		this.build = build;
		this.beta = beta;
	}
	/**
	 * Take a a string of MAJOR.MINOR.BUILD.bBETA and converts it to a
	 * VexFirmwareVersion instance
	 * @param version the string to process
	 * @returns a VexFirmwareVersion representing the provided string
	 */
	static fromString(version) {
		const parts = version
			.toLowerCase()
			.replace(/b/g, '')
			.split('.')
			.map((x) => parseInt(x, 10));
		while (parts.length < 4) {
			parts.push(0);
		}
		return new VexFirmwareVersion(parts[0], parts[1], parts[2], parts[3]);
	}
	/**
	 * Take a a Uint8Array and converts it to a VexFirmwareVersion instance
	 * @param data the array to process
	 * @param offset the offset to start at
	 * @returns a VexFirmwareVersion representing the provided string
	 */
	static fromUint8Array(data, offset = 0, reverse = false) {
		return new VexFirmwareVersion(
			data[offset + (reverse ? 3 : 0)],
			data[offset + (reverse ? 2 : 1)],
			data[offset + (reverse ? 1 : 2)],
			data[offset + (reverse ? 0 : 3)]
		);
	}
	static allZero() {
		return new VexFirmwareVersion(0, 0, 0, 0);
	}
	/**
	 * Take a a string of MAJOR_MINOR_BUILD_BETA and converts it to a
	 * VexFirmwareVersion instance
	 * @param version the string to process
	 * @returns a VexFirmwareVersion representing the provided string
	 */
	static fromCatalogString(version) {
		return VexFirmwareVersion.fromString(version.replace(/_/g, '.'));
	}
	isBeta() {
		return this.beta !== 0;
	}
	/**
	 * returns version as Uint Array
	 */
	toUint8Array(reverse = false) {
		const data = new Uint8Array(4);
		data[reverse ? 3 : 0] = this.major;
		data[reverse ? 2 : 1] = this.minor;
		data[reverse ? 1 : 2] = this.build;
		data[reverse ? 0 : 3] = this.beta;
		return data;
	}
	/**
	 * returns version as major.minor.build
	 */
	toUserString() {
		return `${this.major}.${this.minor}.${this.build}`;
	}
	/**
	 * returns version as ${major}.${minor}.{build}.b${beta}
	 */
	toInternalString() {
		return `${this.toUserString()}.b${this.beta}`;
	}
	/**
	 * compares this version to the provided version.
	 * * if this < b: negative
	 * * if this = b: 0
	 * * if this > b: positive
	 * @param that the version to compare again
	 */
	compare(that) {
		const majorComp = this.major - that.major;
		const minorComp = this.minor - that.minor;
		const buildComp = this.build - that.build;
		const betaComp = this.beta - that.beta;
		if (majorComp !== 0) {
			return majorComp;
		} else if (minorComp !== 0) {
			return minorComp;
		} else if (buildComp !== 0) {
			return buildComp;
		} else if (betaComp !== 0) {
			return betaComp;
		}
		return 0;
	}
}

class PacketView extends DataView {
	constructor(buffer, offset = 0, length = buffer.byteLength - offset) {
		super(buffer, offset, length);
		this.position = 0;
		this.littleEndianDefault = true;
	}
	static fromPacket(packet) {
		const view = new PacketView(packet.data.buffer, packet.data.byteOffset);
		view.position = packet.ackIndex + 1;
		return view;
	}
	nextInt8() {
		const result = this.getInt8(this.position);
		this.position += 1;
		return result;
	}
	nextUint8() {
		const result = this.getUint8(this.position);
		this.position += 1;
		return result;
	}
	nextInt16(littleEndian = this.littleEndianDefault) {
		const result = this.getInt16(this.position, littleEndian);
		this.position += 2;
		return result;
	}
	nextUint16(littleEndian = this.littleEndianDefault) {
		const result = this.getUint16(this.position, littleEndian);
		this.position += 2;
		return result;
	}
	nextInt32(littleEndian = this.littleEndianDefault) {
		const result = this.getInt32(this.position, littleEndian);
		this.position += 4;
		return result;
	}
	nextUint32(littleEndian = this.littleEndianDefault) {
		const result = this.getUint32(this.position, littleEndian);
		this.position += 4;
		return result;
	}
	nextString(length) {
		let result = '';
		for (let i = 0; i < length; i++) {
			result += String.fromCharCode(this.nextUint8());
		}
		return result;
	}
	nextNTBS(length) {
		// this length is different from the document
		let result = '';
		const lastPosition = this.position;
		for (let i = 0; i < length; i++) {
			if (this.byteLength <= this.position) break;
			const g = this.nextUint8();
			if (g === 0) break;
			result += String.fromCharCode(g);
		}
		this.position = lastPosition + length;
		return result;
	}
	nextVarNTBS(length) {
		// this length is different from the document
		let result = '';
		for (let i = 0; i < length; i++) {
			if (this.byteLength <= this.position) break;
			const g = this.nextUint8();
			if (g === 0) break;
			result += String.fromCharCode(g);
		}
		return result;
	}
	nextVersion(reverse = false) {
		const result = VexFirmwareVersion.fromUint8Array(
			new Uint8Array(this.buffer),
			this.position,
			reverse
		);
		this.position += 4;
		return result;
	}
}

const CRC16TABLE = [
	0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b,
	0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
	0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401,
	0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
	0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738,
	0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
	0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96,
	0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
	0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd,
	0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
	0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb,
	0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
	0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2,
	0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
	0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8,
	0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
	0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827,
	0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
	0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d,
	0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
	0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74,
	0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
];
class CrcGenerator {
	constructor() {
		this.crc32Table = new Uint32Array(256);
		this.crc32GenTable();
	}
	/**
	 * Calculate CRC16 for buffer
	 */
	crc16(buf, initValue) {
		const numberOfBytes = buf.byteLength;
		let accumulator = initValue;
		let i;
		let j;
		// now calculate CRC16
		for (j = 0; j < numberOfBytes; j++) {
			i = ((accumulator >>> 8) ^ buf[j]) & 0xff;
			accumulator = ((accumulator << 8) ^ CRC16TABLE[i]) >>> 0;
		}
		return (accumulator & 0xffff) >>> 0;
	}
	/**
	 * Generate CRC32 reverse table
	 */
	crc32GenTable() {
		let i;
		let j;
		let crcAccumulator;
		for (i = 0; i < 256; i++) {
			crcAccumulator = i << 24;
			for (j = 0; j < 8; j++) {
				if ((crcAccumulator & 0x80000000) !== 0)
					crcAccumulator = (crcAccumulator << 1) ^ CrcGenerator.POLYNOMIAL_CRC32;
				else crcAccumulator = crcAccumulator << 1;
			}
			this.crc32Table[i] = crcAccumulator;
		}
	}
	/**
	 * Calculate CRC32 for buffer
	 */
	crc32(buf, initValue) {
		const numberOfBytes = buf.byteLength;
		let crcAccumulator = initValue;
		let i;
		let j;
		// now calculate CRC32
		for (j = 0; j < numberOfBytes; j++) {
			i = ((crcAccumulator >>> 24) ^ buf[j]) & 0xff;
			crcAccumulator = ((crcAccumulator << 8) ^ this.crc32Table[i]) >>> 0;
		}
		return (crcAccumulator & 0xffffffff) >>> 0;
	}
}
CrcGenerator.POLYNOMIAL_CRC32 = 79764919;
CrcGenerator.POLYNOMIAL_CRC16 = 4129;

class PacketEncoder {
	constructor() {
		this.allPacketsTable = {};
		this.vexVersion = 0;
		this.crcgen = new CrcGenerator();
		Object.values(AllPackets).forEach((packet) => {
			if (packet.prototype instanceof HostBoundPacket) {
				this.allPacketsTable[
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					packet.COMMAND_ID + ' ' + packet.COMMAND_EXTENDED_ID
				] = packet;
			}
		});
	}
	static getInstance() {
		if (Packet.ENCODER === undefined) {
			Packet.ENCODER = new PacketEncoder();
		}
		return Packet.ENCODER;
	}
	/**
	 * Create the vex CDC header
	 * @param buf the bytes to send
	 */
	createHeader(buf) {
		// create a buffer if is is not defined
		if (buf === undefined || buf.byteLength < PacketEncoder.HEADERS_LENGTH) {
			buf = new ArrayBuffer(PacketEncoder.HEADERS_LENGTH);
		}
		const h = new Uint8Array(buf);
		h.set(PacketEncoder.HEADER_TO_DEVICE);
		return h;
	}
	/**
	 * Create the vex CDC simple message
	 * @param cmd the CDC command byte
	 */
	cdcCommand(cmd) {
		const buf = new ArrayBuffer(PacketEncoder.HEADERS_LENGTH + 1);
		const h = this.createHeader(buf);
		h.set([cmd], PacketEncoder.HEADERS_LENGTH);
		return h;
	}
	/**
	 * Create the vex CDC simple message
	 * @param cmd the CDC command byte
	 * @param data the data to send
	 */
	cdcCommandWithData(cmd, data) {
		const buf = new ArrayBuffer(PacketEncoder.HEADERS_LENGTH + 2 + data.length);
		const h = this.createHeader(buf);
		// add command and length bytes
		h.set([cmd, data.length], PacketEncoder.HEADERS_LENGTH);
		// add the message data
		h.set(data, PacketEncoder.HEADERS_LENGTH + 2);
		return h;
	}
	/**
	 * Create the vex CDC extended message
	 * @param cmd the CDC command byte
	 * @param ext the CDC extended command byte
	 * @return a message
	 */
	cdc2Command(cmd, ext) {
		const buf = new ArrayBuffer(PacketEncoder.HEADERS_LENGTH + 5);
		const h = this.createHeader(buf);
		h.set([cmd, ext, 0], PacketEncoder.HEADERS_LENGTH);
		// Add CRC
		const crc = this.crcgen.crc16(h.subarray(0, buf.byteLength - 2), 0) >>> 0;
		h.set([crc >>> 8, crc & 0xff], buf.byteLength - 2);
		return h;
	}
	/**
	 * Calculate buffer length for new CDC extended command
	 * @param data the CDC extended command payload
	 * @returns the required buffer length of the command message
	 */
	cdc2CommandBufferLength(data) {
		// New command use header + 1 byte command
		//                        + 1 byte function
		//                        + 1 byte data length
		let length = PacketEncoder.HEADERS_LENGTH + data.length + 3 + 2;
		// If data length is > 127 bytes then an additional data length byte is added
		if (data.length > 127) length += 1;
		return length;
	}
	/**
	 * Create the vex CDC extended message with some data
	 * @param cmd the CDC command byte
	 * @param ext the CDC extended command byte
	 * @param data the CDC extended command payload
	 * @return a message
	 */
	cdc2CommandWithData(cmd, ext, data) {
		const buf = new ArrayBuffer(this.cdc2CommandBufferLength(data));
		const h = this.createHeader(buf);
		// add command and length bytes
		if (data.length < 128) {
			h.set([cmd, ext, data.length], PacketEncoder.HEADERS_LENGTH);
			// add the message data
			h.set(data, PacketEncoder.HEADERS_LENGTH + 3);
		} else {
			const lengthMsb = ((data.length >>> 8) | 0x80) >>> 0;
			const lengthLsb = (data.length & 0xff) >>> 0;
			h.set([cmd, ext, lengthMsb, lengthLsb], PacketEncoder.HEADERS_LENGTH);
			// add the message data
			h.set(data, PacketEncoder.HEADERS_LENGTH + 4);
		}
		// Add CRC (little endian)
		const crc = this.crcgen.crc16(h.subarray(0, buf.byteLength - 2), 0);
		h.set([crc >>> 8, crc & 0xff], buf.byteLength - 2);
		return h;
	}
	validateHeader(data) {
		return !(
			data[0] !== PacketEncoder.HEADER_TO_HOST[0] || data[1] !== PacketEncoder.HEADER_TO_HOST[1]
		);
	}
	validateMessageCdc(data) {
		const message = data.subarray(0, data.byteLength - 2);
		const lastTwoBytes = (data[data.byteLength - 2] << 8) + data[data.byteLength - 1];
		return this.crcgen.crc16(message, 0) === lastTwoBytes;
	}
	getPayloadSize(data) {
		let t = 0;
		let a = data[3];
		if ((128 & a) !== 0) {
			t = 127 & a;
			a = data[4];
		}
		return (t << 8) + a;
	}
}
PacketEncoder.HEADERS_LENGTH = 4;
PacketEncoder.HEADER_TO_DEVICE = [201, 54, 184, 71];
PacketEncoder.HEADER_TO_HOST = [170, 85];
PacketEncoder.J2000_EPOCH = 946684800;
class Packet {
	constructor(rawData) {
		this.data = rawData instanceof ArrayBuffer ? new Uint8Array(rawData) : rawData;
	}
}
class DeviceBoundPacket extends Packet {
	constructor(payload) {
		super(new Uint8Array());
		// eslint-disable-next-line no-proto, @typescript-eslint/no-explicit-any
		const me = this.__proto__.constructor;
		if (me.COMMAND_EXTENDED_ID === undefined) {
			if (payload === undefined) {
				this.data = Packet.ENCODER.cdcCommand(me.COMMAND_ID);
			} else {
				this.data = Packet.ENCODER.cdcCommandWithData(me.COMMAND_ID, payload);
			}
		} else {
			if (payload === undefined) {
				this.data = Packet.ENCODER.cdc2Command(me.COMMAND_ID, me.COMMAND_EXTENDED_ID);
			} else {
				this.data = Packet.ENCODER.cdc2CommandWithData(
					me.COMMAND_ID,
					me.COMMAND_EXTENDED_ID,
					payload
				);
			}
		}
	}
}
class Query1H2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
Query1H2DPacket.COMMAND_ID = 33;
Query1H2DPacket.COMMAND_EXTENDED_ID = undefined;
class SystemVersionH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
SystemVersionH2DPacket.COMMAND_ID = 164;
SystemVersionH2DPacket.COMMAND_EXTENDED_ID = undefined;
class UpdateMatchModeH2DPacket extends DeviceBoundPacket {
	constructor(mode, matchClock) {
		let bit1;
		switch (mode) {
			case 'autonomous':
				bit1 = 10;
				break;
			case 'driver':
				bit1 = 8;
				break;
			case 'disabled':
				bit1 = 11;
		}
		const payload = new Uint8Array(5);
		const view = new DataView(payload.buffer);
		payload[0] = (15 & bit1) >>> 0;
		view.setUint32(1, matchClock, true);
		super(payload);
	}
}
UpdateMatchModeH2DPacket.COMMAND_ID = 88;
UpdateMatchModeH2DPacket.COMMAND_EXTENDED_ID = 193;
class GetMatchStatusH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetMatchStatusH2DPacket.COMMAND_ID = 88;
GetMatchStatusH2DPacket.COMMAND_EXTENDED_ID = 194;
class GetRadioModeH2DPacket extends DeviceBoundPacket {
	constructor(mode) {
		const payload = new Uint8Array(1);
		payload[0] = mode;
		super(payload);
	}
}
GetRadioModeH2DPacket.COMMAND_ID = 88;
GetRadioModeH2DPacket.COMMAND_EXTENDED_ID = 65;
class FileControlH2DPacket extends DeviceBoundPacket {
	constructor(a, b) {
		const payload = new Uint8Array(2);
		payload.set([a, b], 0);
		super(payload);
	}
}
FileControlH2DPacket.COMMAND_ID = 86;
FileControlH2DPacket.COMMAND_EXTENDED_ID = 16;
class InitFileTransferH2DPacket extends DeviceBoundPacket {
	constructor(
		operation,
		target,
		vendor,
		options,
		binary,
		addr,
		name,
		type,
		version = new VexFirmwareVersion(1, 0, 0, 0)
	) {
		const payload = new Uint8Array(52);
		const view = new DataView(payload.buffer);
		view.setUint8(0, operation);
		view.setUint8(1, target);
		view.setUint8(2, vendor);
		view.setUint8(3, options);
		view.setUint32(4, binary.length, true);
		view.setUint32(8, addr, true);
		view.setUint32(
			12,
			operation === FileInitAction.WRITE ? Packet.ENCODER.crcgen.crc32(binary, 0) : 0,
			true
		);
		const re = /(?:\.([^.]+))?$/;
		const reResult = re.exec(name);
		let ext = reResult != null ? reResult[1] : undefined;
		ext !== null && ext !== void 0 ? ext : (ext = '');
		// files with gz extension are also type bin
		ext = ext === 'gz' ? 'bin' : ext;
		payload.set(new TextEncoder().encode(type !== null && type !== void 0 ? type : ext), 16);
		const timestamp = ((Date.now() / 1000) >>> 0) - PacketEncoder.J2000_EPOCH;
		view.setUint32(20, timestamp, true);
		payload.set(version.toUint8Array(), 24);
		// filename
		const nameEncoded = new TextEncoder().encode(name);
		let offset = nameEncoded.length - 23;
		if (offset < 0) offset = 0;
		payload.set(nameEncoded.subarray(offset, offset + 23), 28);
		view.setUint8(51, 0);
		super(payload);
	}
}
InitFileTransferH2DPacket.COMMAND_ID = 86;
InitFileTransferH2DPacket.COMMAND_EXTENDED_ID = 17;
class ExitFileTransferH2DPacket extends DeviceBoundPacket {
	constructor(action) {
		const payload = new Uint8Array(1);
		payload[0] = action;
		super(payload);
	}
}
ExitFileTransferH2DPacket.COMMAND_ID = 86;
ExitFileTransferH2DPacket.COMMAND_EXTENDED_ID = 18;
class WriteFileH2DPacket extends DeviceBoundPacket {
	constructor(addr, buf) {
		const payload = new Uint8Array(4 + buf.length);
		const view = new DataView(payload.buffer);
		view.setUint32(0, addr, true);
		payload.set(buf, 4);
		super(payload);
	}
}
WriteFileH2DPacket.COMMAND_ID = 86;
WriteFileH2DPacket.COMMAND_EXTENDED_ID = 19;
class ReadFileH2DPacket extends DeviceBoundPacket {
	constructor(addr, size) {
		const payload = new Uint8Array(6);
		const view = new DataView(payload.buffer);
		view.setUint32(0, addr, true);
		view.setUint16(4, size, true);
		super(payload);
	}
}
ReadFileH2DPacket.COMMAND_ID = 86;
ReadFileH2DPacket.COMMAND_EXTENDED_ID = 20;
class LinkFileH2DPacket extends DeviceBoundPacket {
	constructor(vendor, fileName, options) {
		const str = new TextEncoder().encode(fileName);
		const payload = new Uint8Array(26);
		payload.set([vendor, options], 0);
		payload.set(str.subarray(0, 23), 2);
		super(payload);
	}
}
LinkFileH2DPacket.COMMAND_ID = 86;
LinkFileH2DPacket.COMMAND_EXTENDED_ID = 21;
class GetDirectoryFileCountH2DPacket extends DeviceBoundPacket {
	constructor(vendor) {
		const payload = new Uint8Array(2);
		payload.set([vendor, 0], 0);
		super(payload);
	}
}
GetDirectoryFileCountH2DPacket.COMMAND_ID = 86;
GetDirectoryFileCountH2DPacket.COMMAND_EXTENDED_ID = 22;
class GetDirectoryEntryH2DPacket extends DeviceBoundPacket {
	constructor(index) {
		const payload = new Uint8Array(2);
		payload.set([index, 0], 0);
		super(payload);
	}
}
GetDirectoryEntryH2DPacket.COMMAND_ID = 86;
GetDirectoryEntryH2DPacket.COMMAND_EXTENDED_ID = 23;
class LoadFileActionH2DPacket extends DeviceBoundPacket {
	constructor(vendor, actionId, fileNameOrSlotNumber) {
		let fileName;
		if (typeof fileNameOrSlotNumber === 'string') {
			fileName = fileNameOrSlotNumber;
		} else {
			fileName = '___s_' + (fileNameOrSlotNumber - 1) + '.bin';
		}
		const encodedName = new TextEncoder().encode(fileName);
		const payload = new Uint8Array(26);
		payload.set([vendor, actionId], 0);
		payload.set(encodedName.subarray(0, 23), 2);
		super(payload);
	}
}
LoadFileActionH2DPacket.COMMAND_ID = 86;
LoadFileActionH2DPacket.COMMAND_EXTENDED_ID = 24;
class GetFileMetadataH2DPacket extends DeviceBoundPacket {
	constructor(vendor, fileName, options) {
		const encodedName = new TextEncoder().encode(fileName);
		const payload = new Uint8Array(26);
		payload.set([vendor, options], 0);
		payload.set(encodedName.subarray(0, 23), 2);
		super(payload);
	}
}
GetFileMetadataH2DPacket.COMMAND_ID = 86;
GetFileMetadataH2DPacket.COMMAND_EXTENDED_ID = 25;
class SetFileMetadataH2DPacket extends DeviceBoundPacket {
	constructor(vendor, fileName, fileInfo, options) {
		const encodedName = new TextEncoder().encode(fileName);
		const encodedType = new TextEncoder().encode(fileInfo.type);
		const payload = new Uint8Array(42);
		const view = new DataView(payload.buffer);
		view.setUint8(0, vendor);
		view.setUint8(1, options);
		view.setUint32(2, fileInfo.loadAddress, true);
		payload.set(encodedType.subarray(0, 4), 6);
		const timestamp = fileInfo.timestamp - PacketEncoder.J2000_EPOCH + 100; // XXX: + 100 TEST ONLY
		view.setUint32(10, timestamp, true);
		payload.set(fileInfo.version.toUint8Array(), 14);
		payload.set(encodedName.subarray(0, 23), 18);
		super(payload);
	}
}
// DOES NOT WORK
SetFileMetadataH2DPacket.COMMAND_ID = 86;
SetFileMetadataH2DPacket.COMMAND_EXTENDED_ID = 26;
class EraseFileH2DPacket extends DeviceBoundPacket {
	constructor(vendor, fileName) {
		const encodedName = new TextEncoder().encode(fileName);
		const payload = new Uint8Array(26);
		payload.set([vendor, 128], 0);
		payload.set(encodedName.subarray(0, 23), 2);
		super(payload);
	}
}
EraseFileH2DPacket.COMMAND_ID = 86;
EraseFileH2DPacket.COMMAND_EXTENDED_ID = 27;
class GetProgramSlotInfoH2DPacket extends DeviceBoundPacket {
	constructor(vendor, fileName) {
		const encodedName = new TextEncoder().encode(fileName);
		const payload = new Uint8Array(26);
		payload.set([vendor, 0], 0);
		payload.set(encodedName.subarray(0, 23), 2);
		super(payload);
	}
}
GetProgramSlotInfoH2DPacket.COMMAND_ID = 86;
GetProgramSlotInfoH2DPacket.COMMAND_EXTENDED_ID = 28;
class FileClearUpH2DPacket extends DeviceBoundPacket {
	constructor(vendor) {
		const payload = new Uint8Array(2);
		payload.set([vendor, 0], 0);
		super(payload);
	}
}
FileClearUpH2DPacket.COMMAND_ID = 86;
FileClearUpH2DPacket.COMMAND_EXTENDED_ID = 30;
class FileFormatH2DPacket extends DeviceBoundPacket {
	constructor() {
		const payload = new Uint8Array(4);
		payload.set([68, 67, 66, 65], 0);
		super(payload);
	}
}
FileFormatH2DPacket.COMMAND_ID = 86;
FileFormatH2DPacket.COMMAND_EXTENDED_ID = 31;
class GetSystemFlagsH2DPacket extends DeviceBoundPacket {}
GetSystemFlagsH2DPacket.COMMAND_ID = 86;
GetSystemFlagsH2DPacket.COMMAND_EXTENDED_ID = 32;
class GetDeviceStatusH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetDeviceStatusH2DPacket.COMMAND_ID = 86;
GetDeviceStatusH2DPacket.COMMAND_EXTENDED_ID = 33;
class GetSystemStatusH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetSystemStatusH2DPacket.COMMAND_ID = 86;
GetSystemStatusH2DPacket.COMMAND_EXTENDED_ID = 34;
class GetFdtStatusH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetFdtStatusH2DPacket.COMMAND_ID = 86;
GetFdtStatusH2DPacket.COMMAND_EXTENDED_ID = 35;
class GetLogCountH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetLogCountH2DPacket.COMMAND_ID = 86;
GetLogCountH2DPacket.COMMAND_EXTENDED_ID = 36;
class ReadLogPageH2DPacket extends DeviceBoundPacket {
	constructor(offset, count) {
		const payload = new Uint8Array(8);
		const view = new DataView(payload.buffer);
		view.setUint32(0, offset, true);
		view.setUint32(4, count, true);
		super(payload);
	}
}
ReadLogPageH2DPacket.COMMAND_ID = 86;
ReadLogPageH2DPacket.COMMAND_EXTENDED_ID = 37;
class GetRadioStatusH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetRadioStatusH2DPacket.COMMAND_ID = 86;
GetRadioStatusH2DPacket.COMMAND_EXTENDED_ID = 38;
class GetUserDataH2DPacket extends DeviceBoundPacket {
	constructor(e) {
		var _a;
		let len =
			(_a = e === null || e === void 0 ? void 0 : e.length) !== null && _a !== void 0 ? _a : 0;
		if (len > 244) len = 244;
		const payload = new Uint8Array(2 + len);
		payload[0] = 1;
		payload[1] = len;
		payload.set(e !== null && e !== void 0 ? e : new Uint8Array(0), 2);
		super(payload);
	}
}
// UNCONFIRMED
GetUserDataH2DPacket.COMMAND_ID = 86;
GetUserDataH2DPacket.COMMAND_EXTENDED_ID = 39;
class ScreenCaptureH2DPacket extends DeviceBoundPacket {
	constructor(e) {
		const payload = new Uint8Array(1);
		payload[0] = e;
		super(payload);
	}
}
ScreenCaptureH2DPacket.COMMAND_ID = 86;
ScreenCaptureH2DPacket.COMMAND_EXTENDED_ID = 40;
class SendDashTouchH2DPacket extends DeviceBoundPacket {
	constructor(x, y, press) {
		const payload = new Uint8Array(6);
		const view = new DataView(payload.buffer);
		view.setUint16(0, x, true);
		view.setUint16(2, y, true);
		view.setUint16(4, press ? 1 : 0, true);
		super(payload);
	}
}
SendDashTouchH2DPacket.COMMAND_ID = 86;
SendDashTouchH2DPacket.COMMAND_EXTENDED_ID = 42;
class SelectDashH2DPacket extends DeviceBoundPacket {
	/** @param port untested */
	constructor(screen, port) {
		const payload = new Uint8Array(2);
		payload[0] = screen;
		payload[1] = port;
		super(payload);
	}
}
// UNSURE
SelectDashH2DPacket.COMMAND_ID = 86;
SelectDashH2DPacket.COMMAND_EXTENDED_ID = 43;
class EnableDashH2DPacket extends DeviceBoundPacket {
	constructor(unknown1) {
		if (unknown1 === undefined) {
			super(undefined);
		} else {
			const payload = new Uint8Array(1);
			payload[0] = unknown1;
			super(payload);
		}
	}
}
// UNSURE
EnableDashH2DPacket.COMMAND_ID = 86;
EnableDashH2DPacket.COMMAND_EXTENDED_ID = 44;
class DisableDashH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
// UNSURE
DisableDashH2DPacket.COMMAND_ID = 86;
DisableDashH2DPacket.COMMAND_EXTENDED_ID = 45;
class ReadKeyValueH2DPacket extends DeviceBoundPacket {
	constructor(key) {
		const payload = new Uint8Array(32);
		payload.set(new TextEncoder().encode(key), 0);
		super(payload);
	}
}
// UNSURE
ReadKeyValueH2DPacket.COMMAND_ID = 86;
ReadKeyValueH2DPacket.COMMAND_EXTENDED_ID = 46;
class WriteKeyValueH2DPacket extends DeviceBoundPacket {
	constructor(key, value) {
		let strk = new TextEncoder().encode(key);
		const strv = new TextEncoder().encode(value);
		if (strk.byteLength > 31) strk = strk.subarray(0, 31);
		const payload = new Uint8Array(strk.length + strv.length + 20);
		payload.set(strk, 0);
		payload.set(strv, strk.length + 1);
		super(payload);
	}
}
// UNSURE
WriteKeyValueH2DPacket.COMMAND_ID = 86;
WriteKeyValueH2DPacket.COMMAND_EXTENDED_ID = 47;
class GetSlot1to4InfoH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetSlot1to4InfoH2DPacket.COMMAND_ID = 86;
GetSlot1to4InfoH2DPacket.COMMAND_EXTENDED_ID = 49;
class GetSlot5to8InfoH2DPacket extends DeviceBoundPacket {
	constructor() {
		super(undefined);
	}
}
GetSlot5to8InfoH2DPacket.COMMAND_ID = 86;
GetSlot5to8InfoH2DPacket.COMMAND_EXTENDED_ID = 50;
class FactoryStatusH2DPacket extends DeviceBoundPacket {}
FactoryStatusH2DPacket.COMMAND_ID = 86;
FactoryStatusH2DPacket.COMMAND_EXTENDED_ID = 241;
class FactoryEnableH2DPacket extends DeviceBoundPacket {
	constructor() {
		const payload = new Uint8Array(4);
		payload.set([77, 76, 75, 74], 0);
		super(payload);
	}
}
FactoryEnableH2DPacket.COMMAND_ID = 86;
FactoryEnableH2DPacket.COMMAND_EXTENDED_ID = 255;
class HostBoundPacket extends Packet {
	constructor(data) {
		super(data);
		this.ack = AckType.CDC2_NACK;
		this.payloadSize = Packet.ENCODER.getPayloadSize(this.data);
		const n = this.payloadSize > 128 ? 5 : 4;
		// skip command id check
		this.ack = this.data[(this.ackIndex = n + 1)];
	}
	static isValidPacket(data, n) {
		const ack = data[n + 1];
		return ack === AckType.CDC2_ACK || ack === 167; // XXX: got 167 from MatchStatusReplyD2HPacket
	}
}
class Query1ReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		this.joystickFlag1 = this.data[4];
		this.joystickFlag2 = this.data[5];
		this.brainFlag1 = this.data[6]; // a.k.a vex version
		this.brainFlag2 = this.data[7];
		this.bootloadFlag1 = this.data[10];
		this.bootloadFlag2 = this.data[11];
	}
}
Query1ReplyD2HPacket.COMMAND_ID = 33;
Query1ReplyD2HPacket.COMMAND_EXTENDED_ID = undefined;
class SystemVersionReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		this.version = new VexFirmwareVersion(this.data[4], this.data[5], this.data[6], this.data[8]);
		this.hardware = this.data[7];
	}
}
SystemVersionReplyD2HPacket.COMMAND_ID = 164;
SystemVersionReplyD2HPacket.COMMAND_EXTENDED_ID = undefined;
class MatchModeReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.modebit = dataView.nextUint8();
	}
}
MatchModeReplyD2HPacket.COMMAND_ID = 88;
MatchModeReplyD2HPacket.COMMAND_EXTENDED_ID = 193;
class MatchStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		const n = this.ackIndex;
		this.rssi = dataView.nextInt8();
		this.systemStatusBits = dataView.nextUint16();
		this.radioStatusBits = dataView.nextUint16();
		this.fieldStatusBits = dataView.nextUint8();
		this.matchClock = dataView.nextUint8();
		this.brainBatteryPercent = dataView.nextUint8();
		this.controllerBatteryPercent = dataView.nextUint8();
		this.partnerControllerBatteryPercent = dataView.nextUint8();
		this.pad = dataView.nextUint8();
		this.buttons = dataView.nextUint16();
		this.activeProgram = dataView.nextUint8();
		this.radioType = dataView.nextUint8();
		this.radioChannel = dataView.nextUint8();
		this.radioSlot = dataView.nextUint8();
		this.robotName = dataView.nextNTBS(10);
		this.controllerFlags = dataView.getUint8(n + 28);
		this.rxSignalQuality = dataView.getUint8(n + 29);
		let rawStr = new TextDecoder('UTF-8').decode(data.slice(n + 18, n + this.payloadSize + 28));
		const endIdx = rawStr.indexOf('\0');
		if (endIdx > -1) {
			rawStr = rawStr.substr(0, endIdx);
		}
		this.robotName = rawStr;
	}
}
MatchStatusReplyD2HPacket.COMMAND_ID = 88;
MatchStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 194;
class FileControlReplyD2HPacket extends HostBoundPacket {}
FileControlReplyD2HPacket.COMMAND_ID = 86;
FileControlReplyD2HPacket.COMMAND_EXTENDED_ID = 16;
class InitFileTransferReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.windowSize = dataView.nextUint16();
		this.fileSize = dataView.nextUint32();
		this.crc32 = dataView.nextUint32();
	}
}
InitFileTransferReplyD2HPacket.COMMAND_ID = 86;
InitFileTransferReplyD2HPacket.COMMAND_EXTENDED_ID = 17;
class ExitFileTransferReplyD2HPacket extends HostBoundPacket {}
ExitFileTransferReplyD2HPacket.COMMAND_ID = 86;
ExitFileTransferReplyD2HPacket.COMMAND_EXTENDED_ID = 18;
class WriteFileReplyD2HPacket extends HostBoundPacket {}
WriteFileReplyD2HPacket.COMMAND_ID = 86;
WriteFileReplyD2HPacket.COMMAND_EXTENDED_ID = 19;
class ReadFileReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		const n = this.ackIndex;
		this.addr = dataView.getUint32(n, true);
		this.length = this.payloadSize - 7;
		this.buf = data.slice(n + 4, n + 4 + this.length);
	}
	static isValidPacket(data, n) {
		return data[4] === 4 ? data[n + 1] === AckType.CDC2_ACK : true;
	}
}
ReadFileReplyD2HPacket.COMMAND_ID = 86;
ReadFileReplyD2HPacket.COMMAND_EXTENDED_ID = 20;
class LinkFileReplyD2HPacket extends HostBoundPacket {}
LinkFileReplyD2HPacket.COMMAND_ID = 86;
LinkFileReplyD2HPacket.COMMAND_EXTENDED_ID = 21;
class GetDirectoryFileCountReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.count = dataView.nextUint16();
	}
}
GetDirectoryFileCountReplyD2HPacket.COMMAND_ID = 86;
GetDirectoryFileCountReplyD2HPacket.COMMAND_EXTENDED_ID = 22;
class GetDirectoryEntryReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		if (this.payloadSize > 4) {
			this.file = {
				index: dataView.nextUint8(),
				size: dataView.nextUint32(),
				loadAddress: dataView.nextUint32(),
				crc32: dataView.nextUint32(),
				type: dataView.nextString(4),
				timestamp: dataView.nextUint32() + PacketEncoder.J2000_EPOCH,
				version: dataView.nextVersion(),
				filename: dataView.nextNTBS(32)
			};
		}
	}
}
GetDirectoryEntryReplyD2HPacket.COMMAND_ID = 86;
GetDirectoryEntryReplyD2HPacket.COMMAND_EXTENDED_ID = 23;
class LoadFileActionReplyD2HPacket extends HostBoundPacket {}
LoadFileActionReplyD2HPacket.COMMAND_ID = 86;
LoadFileActionReplyD2HPacket.COMMAND_EXTENDED_ID = 24;
class GetFileMetadataReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		dataView.nextUint8();
		if (this.payloadSize > 4) {
			this.file = {
				size: dataView.nextUint32(),
				loadAddress: dataView.nextUint32(),
				crc32: dataView.nextUint32(),
				type: dataView.nextString(4),
				timestamp: dataView.nextUint32() + PacketEncoder.J2000_EPOCH,
				version: dataView.nextVersion()
			};
		}
	}
}
GetFileMetadataReplyD2HPacket.COMMAND_ID = 86;
GetFileMetadataReplyD2HPacket.COMMAND_EXTENDED_ID = 25;
class SetFileMetadataReplyD2HPacket extends HostBoundPacket {}
SetFileMetadataReplyD2HPacket.COMMAND_ID = 86;
SetFileMetadataReplyD2HPacket.COMMAND_EXTENDED_ID = 26;
class EraseFileReplyD2HPacket extends HostBoundPacket {}
EraseFileReplyD2HPacket.COMMAND_ID = 86;
EraseFileReplyD2HPacket.COMMAND_EXTENDED_ID = 27;
class GetProgramSlotInfoReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.slot = dataView.nextUint8();
		this.requestedSlot = dataView.nextUint8();
	}
}
GetProgramSlotInfoReplyD2HPacket.COMMAND_ID = 86;
GetProgramSlotInfoReplyD2HPacket.COMMAND_EXTENDED_ID = 28;
class FileClearUpReplyD2HPacket extends HostBoundPacket {}
FileClearUpReplyD2HPacket.COMMAND_ID = 86;
FileClearUpReplyD2HPacket.COMMAND_EXTENDED_ID = 30;
class FileFormatReplyD2HPacket extends HostBoundPacket {}
FileFormatReplyD2HPacket.COMMAND_ID = 86;
FileFormatReplyD2HPacket.COMMAND_EXTENDED_ID = 31;
class GetSystemFlagsReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.radioSearching = false;
		this.currentProgram = 0;
		this.flags = dataView.nextUint32();
		const hasPartner = (8192 & this.flags) !== 0;
		const hasRadio = (1536 & this.flags) === 1536;
		const byte1 = dataView.nextUint8();
		const byte2 = dataView.nextUint8();
		if (this.payloadSize === 11) {
			this.battery = 8 * (byte1 & 0x0f);
			if ((this.flags & 0x100) !== 0 || hasRadio)
				this.controllerBatteryPercent = 8 * ((byte1 >> 4) & 0x0f);
			if (hasRadio) this.radioQuality = 8 * (byte2 & 0x0f);
			this.radioSearching = (this.flags & 0x600) === 0x200;
			if (hasPartner) this.partnerControllerBatteryPercent = 8 * ((byte2 >> 4) & 0x0f);
			this.currentProgram = dataView.nextUint8();
			if (this.battery != null && this.battery > 100) this.battery = 100;
			if (this.controllerBatteryPercent != null && this.controllerBatteryPercent > 100)
				this.controllerBatteryPercent = 100;
			if (this.radioQuality != null && this.radioQuality > 100) this.radioQuality = 100;
			if (
				this.partnerControllerBatteryPercent != null &&
				this.partnerControllerBatteryPercent > 100
			)
				this.partnerControllerBatteryPercent = 100;
		}
	}
}
GetSystemFlagsReplyD2HPacket.COMMAND_ID = 86;
GetSystemFlagsReplyD2HPacket.COMMAND_EXTENDED_ID = 32;
class GetDeviceStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.count = dataView.nextUint8();
		this.devices = [];
		for (let i = 0; i < this.count; i++) {
			this.devices.push({
				port: dataView.nextUint8(),
				type: dataView.nextUint8(),
				status: dataView.nextUint8(),
				betaversion: dataView.nextUint8(),
				version: dataView.nextUint16(),
				bootversion: dataView.nextUint16()
			});
		}
	}
}
GetDeviceStatusReplyD2HPacket.COMMAND_ID = 86;
GetDeviceStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 33;
class GetSystemStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		dataView.nextUint8();
		this.systemVersion = dataView.nextVersion();
		this.cpu0Version = dataView.nextVersion();
		this.cpu1Version = dataView.nextVersion();
		this.touchVersion = dataView.nextVersion(true);
		this.uniqueId = 1234;
		this.sysflags = [0, 0, 0, 0, 0, 0, 0];
		this.goldenVersion = VexFirmwareVersion.allZero();
		this.nxpVersion = VexFirmwareVersion.allZero();
		this.eventBrain = false;
		this.romBootloaderActive = false;
		this.ramBootloaderActive = false;
		if (this.payloadSize > 25) {
			this.uniqueId = dataView.nextUint32();
			this.sysflags = [
				dataView.nextUint8(),
				dataView.nextUint8(),
				dataView.nextUint8(),
				dataView.nextUint8(),
				dataView.nextUint8(),
				0,
				dataView.nextUint8()
			];
			this.eventBrain = (1 & this.sysflags[6]) !== 0;
			this.romBootloaderActive = (2 & this.sysflags[6]) !== 0;
			this.ramBootloaderActive = (4 & this.sysflags[6]) !== 0;
			dataView.nextUint16();
			this.goldenVersion = dataView.nextVersion();
		}
		if (this.payloadSize > 37) {
			this.nxpVersion = dataView.nextVersion();
		}
	}
}
GetSystemStatusReplyD2HPacket.COMMAND_ID = 86;
GetSystemStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 34;
class GetFdtStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.count = dataView.nextUint8();
		this.status = [];
		for (let i = 0; i < this.count; i++) {
			this.status.push({
				index: dataView.nextUint8(),
				type: dataView.nextUint8(),
				status: dataView.nextUint8(),
				betaversion: dataView.nextUint8(),
				version: dataView.nextUint16(),
				bootversion: dataView.nextUint16()
			});
		}
	}
}
GetFdtStatusReplyD2HPacket.COMMAND_ID = 86;
GetFdtStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 35;
class GetLogCountReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		dataView.nextUint8();
		this.count = dataView.nextUint32();
	}
}
GetLogCountReplyD2HPacket.COMMAND_ID = 86;
GetLogCountReplyD2HPacket.COMMAND_EXTENDED_ID = 36;
class ReadLogPageReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		const n = this.ackIndex;
		const size = dataView.nextUint8();
		this.offset = dataView.nextUint32();
		this.count = dataView.nextUint16();
		this.entries = [];
		let j = n + 8;
		for (let i = 0; i < this.count; i++) {
			this.entries.push({
				code: dataView.getUint8(j),
				type: dataView.getUint8(j + 1),
				desc: dataView.getUint8(j + 2),
				spare: dataView.getUint8(j + 3),
				time: dataView.getUint32(j + 4, true)
			});
			j += size;
		}
	}
}
ReadLogPageReplyD2HPacket.COMMAND_ID = 86;
ReadLogPageReplyD2HPacket.COMMAND_EXTENDED_ID = 37;
class GetRadioStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		const n = this.ackIndex;
		this.device = dataView.nextUint8();
		this.quality = dataView.nextUint16();
		this.strength = dataView.nextInt16();
		this.channel = this.data[n + 6];
		this.timeslot = this.data[n + 7];
	}
}
GetRadioStatusReplyD2HPacket.COMMAND_ID = 86;
GetRadioStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 38;
class GetUserDataReplyD2HPacket extends HostBoundPacket {}
GetUserDataReplyD2HPacket.COMMAND_ID = 86;
GetUserDataReplyD2HPacket.COMMAND_EXTENDED_ID = 39;
class ScreenCaptureReplyD2HPacket extends HostBoundPacket {}
ScreenCaptureReplyD2HPacket.COMMAND_ID = 86;
ScreenCaptureReplyD2HPacket.COMMAND_EXTENDED_ID = 40;
// export class UserProgramControlReplyD2HPacket extends HostBoundPacket {
//     static COMMAND_ID = 86;
//     static COMMAND_EXTENDED_ID = 41;
// }
class SendDashTouchReplyD2HPacket extends HostBoundPacket {}
SendDashTouchReplyD2HPacket.COMMAND_ID = 86;
SendDashTouchReplyD2HPacket.COMMAND_EXTENDED_ID = 42;
class SelectDashReplyD2HPacket extends HostBoundPacket {}
SelectDashReplyD2HPacket.COMMAND_ID = 86;
SelectDashReplyD2HPacket.COMMAND_EXTENDED_ID = 43;
class EnableDashReplyD2HPacket extends HostBoundPacket {}
EnableDashReplyD2HPacket.COMMAND_ID = 86;
EnableDashReplyD2HPacket.COMMAND_EXTENDED_ID = 44;
class DisableDashReplyD2HPacket extends HostBoundPacket {}
DisableDashReplyD2HPacket.COMMAND_ID = 86;
DisableDashReplyD2HPacket.COMMAND_EXTENDED_ID = 45;
class ReadKeyValueReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.value = dataView.nextVarNTBS(255);
	}
}
ReadKeyValueReplyD2HPacket.COMMAND_ID = 86;
ReadKeyValueReplyD2HPacket.COMMAND_EXTENDED_ID = 46;
class WriteKeyValueReplyD2HPacket extends HostBoundPacket {}
WriteKeyValueReplyD2HPacket.COMMAND_ID = 86;
WriteKeyValueReplyD2HPacket.COMMAND_EXTENDED_ID = 47;
class GetSlot1to4InfoReplyD2HPacket extends HostBoundPacket {
	constructor(data, start = 1) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.slotFlags = dataView.nextUint8();
		this.slots = [];
		for (let i = 0; i < 4; i++) {
			const hasData = (this.slotFlags & Math.pow(2, start - 1 + i)) !== 0;
			if (!hasData) continue;
			const iconNum = dataView.nextUint16();
			const nameLen = dataView.nextUint8();
			const name = dataView.nextString(nameLen);
			this.slots.push({
				slot: start + i,
				icon: iconNum,
				name
			});
		}
	}
}
GetSlot1to4InfoReplyD2HPacket.COMMAND_ID = 86;
GetSlot1to4InfoReplyD2HPacket.COMMAND_EXTENDED_ID = 49;
class GetSlot5to8InfoReplyD2HPacket extends GetSlot1to4InfoReplyD2HPacket {
	constructor(data) {
		super(data, 5);
		this.slotStartIndex = 5;
	}
}
GetSlot5to8InfoReplyD2HPacket.COMMAND_ID = 86;
GetSlot5to8InfoReplyD2HPacket.COMMAND_EXTENDED_ID = 50;
class FactoryStatusReplyD2HPacket extends HostBoundPacket {
	constructor(data) {
		super(data);
		const dataView = PacketView.fromPacket(this);
		this.status = dataView.nextUint8();
		this.percent = dataView.nextUint8();
	}
}
FactoryStatusReplyD2HPacket.COMMAND_ID = 86;
FactoryStatusReplyD2HPacket.COMMAND_EXTENDED_ID = 241;
class FactoryEnableReplyD2HPacket extends HostBoundPacket {}
FactoryEnableReplyD2HPacket.COMMAND_ID = 86;
FactoryEnableReplyD2HPacket.COMMAND_EXTENDED_ID = 255;

const thePacketEncoder = PacketEncoder.getInstance();
/**
 * A connection to a V5 device.
 * Emit events: connected, disconnected
 */
class VexSerialConnection extends VexEventTarget {
	constructor(serial) {
		super();
		this.filters = [{ usbVendorId: 10376 }];
		this.callbacksQueue = [];
		this.serial = serial;
	}
	get isConnected() {
		return this.port !== undefined && this.reader !== undefined && this.writer !== undefined;
	}
	close() {
		var _a, _b, _c;
		return __awaiter(this, void 0, void 0, function* () {
			if (!this.isConnected) return;
			try {
				yield (_a = this.writer) === null || _a === void 0 ? void 0 : _a.close();
				this.writer = undefined;
			} catch (e) {}
			try {
				yield (_b = this.reader) === null || _b === void 0 ? void 0 : _b.cancel();
				try {
					while (this.reader != null) {
						const { done } = yield this.reader.read();
						if (done) break;
					}
				} catch (e) {}
				this.reader = undefined;
			} catch (e) {}
			try {
				yield new Promise((resolve) => setTimeout(resolve, 1)); // HACK: wait for the lock to be released
				yield (_c = this.port) === null || _c === void 0 ? void 0 : _c.close();
				this.port = undefined;
			} catch (e) {
				console.warn('Close port error.', e);
			} finally {
				this.emit('disconnected', undefined);
			}
		});
	}
	open(use = 0, askUser = true) {
		return __awaiter(this, void 0, void 0, function* () {
			if (this.port !== undefined) throw new Error('Already connected.');
			let port;
			if (use !== undefined) {
				const ports = (yield this.serial.getPorts())
					.filter((p) => {
						const info = p.getInfo();
						return this.filters.find(
							(f) =>
								(f.usbVendorId === undefined || f.usbVendorId === info.usbVendorId) &&
								(f.usbProductId === undefined || f.usbProductId === info.usbProductId)
						);
					})
					.filter((e) => e.readable !== null);
				port = ports[use];
			}
			if (port == null && askUser) {
				try {
					port = yield this.serial.requestPort({ filters: this.filters });
				} catch (e) {
					console.warn(e);
					console.warn('No valid port selected.');
				}
			}
			if (port == null) return undefined;
			if (port.readable != null) return false;
			try {
				yield port.open({ baudRate: 115200 });
				this.port = port;
				this.port.addEventListener('disconnect', () => {
					void this.close();
				});
				this.emit('connected', undefined);
				this.writer = this.port.writable.getWriter();
				this.reader = this.port.readable.getReader();
				void this.startReader();
				return true;
			} catch (e) {
				return false;
			}
		});
	}
	writeData(rawData, resolve, timeout = 1000) {
		void this.writeDataAsync(rawData, timeout).then(resolve);
	}
	writeDataAsync(rawData, timeout = 1000) {
		return __awaiter(this, void 0, void 0, function* () {
			return yield new Promise((resolve) => {
				if (this.writer === undefined) {
					resolve(AckType.CDC2_NACK);
					return;
				}
				const data = rawData instanceof DeviceBoundPacket ? rawData.data : rawData;
				const cb = {
					callback: resolve,
					timeout: setTimeout(() => {
						var _a;
						(_a = this.callbacksQueue.shift()) === null || _a === void 0
							? void 0
							: _a.callback(AckType.TIMEOUT);
					}, timeout),
					wantedCommandId:
						rawData instanceof DeviceBoundPacket
							? // eslint-disable-next-line @typescript-eslint/no-explicit-any
								rawData.constructor.COMMAND_ID
							: undefined,
					wantedCommandExId:
						rawData instanceof DeviceBoundPacket
							? // eslint-disable-next-line @typescript-eslint/no-explicit-any
								rawData.constructor.COMMAND_EXTENDED_ID
							: undefined
				};
				this.callbacksQueue.push(cb);
				this.writer
					.write(data)
					.then(() => {
						logData(data, 100);
					})
					.catch(() => {
						this.callbacksQueue.splice(this.callbacksQueue.indexOf(cb), 1);
						resolve(AckType.WRITE_ERROR);
					});
			});
		});
	}
	readData(cache, expectedSize) {
		return __awaiter(this, void 0, void 0, function* () {
			if (this.reader == null) throw new Error('No reader');
			while (cache.byteLength < expectedSize) {
				const { value: readData, done: isDone } = yield this.reader.read();
				if (isDone) throw new Error('No data');
				cache = binaryArrayJoin(cache, readData);
			}
			return cache;
		});
	}
	startReader() {
		return __awaiter(this, void 0, void 0, function* () {
			let cache = new Uint8Array([]);
			let sliceIdx = 0;
			for (;;)
				try {
					cache = yield this.readData(cache, 5);
					sliceIdx = 0;
					if (!thePacketEncoder.validateHeader(cache)) throw new Error('Invalid header');
					const payloadExpectedSize = thePacketEncoder.getPayloadSize(cache);
					const n = payloadExpectedSize > 128 ? 5 : 4;
					const totalSize = n + payloadExpectedSize;
					cache = yield this.readData(cache, totalSize);
					sliceIdx = totalSize + 1;
					const cmdId = cache[2];
					const hasExtId = cmdId === 88 || cmdId === 86;
					const cmdExId = hasExtId ? cache[n] : undefined;
					const ack = cache[n + 1];
					if (hasExtId) {
						if (!thePacketEncoder.validateMessageCdc(cache)) throw new Error('Invalid message CDC');
					}
					let callbackInfo;
					let wantedCmdId;
					let wantedCmdExId;
					let tryIdx = 0;
					while ((callbackInfo = this.callbacksQueue[tryIdx++]) !== null) {
						wantedCmdId =
							callbackInfo === null || callbackInfo === void 0
								? void 0
								: callbackInfo.wantedCommandId;
						wantedCmdExId =
							callbackInfo === null || callbackInfo === void 0
								? void 0
								: callbackInfo.wantedCommandExId;
						if (
							(wantedCmdId !== undefined && wantedCmdId !== cmdId) ||
							(wantedCmdExId !== undefined && wantedCmdExId !== cmdExId)
						) {
							continue;
						}
						break;
					}
					if (callbackInfo === undefined) {
						console.warn('Unexpected command', cmdId, cmdExId, ack);
						// TODO: trigger event
						continue;
					}
					const data = cache.slice(0, sliceIdx);
					const PackageType = thePacketEncoder.allPacketsTable[wantedCmdId + ' ' + wantedCmdExId];
					if (
						(wantedCmdId === undefined && wantedCmdExId === undefined) ||
						PackageType === undefined
					) {
						callbackInfo.callback(data);
					} else {
						if (!hasExtId || PackageType.isValidPacket(data, n)) {
							callbackInfo.callback(new PackageType(data));
						} else {
							console.warn('ack', ack);
							callbackInfo.callback(ack);
						}
					}
					clearTimeout(callbackInfo.timeout);
					this.callbacksQueue.splice(tryIdx - 1, 1);
				} catch (e) {
					console.warn('Read error.', e, cache);
					yield this.close();
					break;
				} finally {
					cache = cache.slice(sliceIdx);
				}
		});
	}
	query1() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new Query1H2DPacket(), 100);
			return result instanceof Query1ReplyD2HPacket ? result : null;
		});
	}
	getSystemVersion() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new SystemVersionH2DPacket());
			return result instanceof SystemVersionReplyD2HPacket ? result.version : null;
		});
	}
}
class V5SerialConnection extends VexSerialConnection {
	constructor() {
		super(...arguments);
		this.filters = [
			{ usbVendorId: 10376, usbProductId: SerialDeviceType.V5_BRAIN },
			{ usbVendorId: 10376, usbProductId: SerialDeviceType.V5_BRAIN_DFU },
			{ usbVendorId: 10376, usbProductId: SerialDeviceType.V5_CONTROLLER }
		];
	}
	getDeviceStatus() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new GetDeviceStatusH2DPacket());
			return result instanceof GetDeviceStatusReplyD2HPacket ? result : null;
		});
	}
	getRadioStatus() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new GetRadioStatusH2DPacket());
			return result instanceof GetRadioStatusReplyD2HPacket ? result : null;
		});
	}
	getSystemFlags() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new GetSystemFlagsH2DPacket());
			return result instanceof GetSystemFlagsReplyD2HPacket ? result : null;
		});
	}
	getSystemStatus(timeout = 1000) {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new GetSystemStatusH2DPacket(), timeout);
			return result instanceof GetSystemStatusReplyD2HPacket ? result : null;
		});
	}
	getMatchStatus() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new GetMatchStatusH2DPacket());
			return result instanceof MatchStatusReplyD2HPacket ? result : null;
		});
	}
	uploadProgramToDevice(iniConfig, binFileBuf, coldFileBuf, progressCallback) {
		return __awaiter(this, void 0, void 0, function* () {
			const iniFileBuffer = new TextEncoder().encode(iniConfig.createIni());
			const basename = iniConfig.baseName;
			const iniRequest = {
				filename: basename + '.ini',
				buf: iniFileBuffer,
				downloadTarget: FileDownloadTarget.FILE_TARGET_QSPI,
				vid: FileVendor.USER,
				autoRun: false
			};
			const r1 = yield this.uploadFileToDevice(iniRequest, (current, total) => {
				progressCallback('INI', current, total);
			});
			if (!r1) return false;
			// let prjRequest = { filename: basename + '.prj', buf: prjfile, vid: FileVendor.USER, loadAddr: undefined, exttype: 0, linkedFile: undefined };
			// await this.uploadFileToDeviceAsync(prjRequest, onProgress);
			const coldRequest =
				coldFileBuf !== undefined
					? {
							filename: basename + '_lib.bin',
							buf: coldFileBuf,
							downloadTarget: FileDownloadTarget.FILE_TARGET_QSPI,
							vid: 24,
							autoRun: false
						}
					: undefined;
			if (coldRequest != null) {
				const r2 = yield this.uploadFileToDevice(coldRequest, (current, total) => {
					progressCallback('COLD', current, total);
				});
				if (!r2) return;
			}
			const binRequest = {
				filename: basename + '.bin',
				buf: binFileBuf,
				downloadTarget: FileDownloadTarget.FILE_TARGET_QSPI,
				vid: FileVendor.USER,
				loadAddress: coldFileBuf != null ? 0x07800000 : undefined,
				autoRun: iniConfig.autorun,
				linkedFile: coldRequest
			};
			const r3 = yield this.uploadFileToDevice(binRequest, (current, total) => {
				progressCallback('BIN', current, total);
			});
			return r3;
		});
	}
	downloadFileToHost(
		request,
		downloadTarget = FileDownloadTarget.FILE_TARGET_QSPI,
		progressCallback
	) {
		return __awaiter(this, void 0, void 0, function* () {
			// TODO assert that the device is connected
			const { filename, vendor, loadAddress, size } = request;
			let nextAddress =
				loadAddress !== null && loadAddress !== void 0 ? loadAddress : USER_FLASH_USR_CODE_START;
			const p1 = yield this.writeDataAsync(
				new InitFileTransferH2DPacket(
					FileInitAction.READ,
					downloadTarget,
					vendor,
					FileInitOption.NONE,
					new Uint8Array(),
					nextAddress,
					filename,
					''
				)
			);
			if (!(p1 instanceof InitFileTransferReplyD2HPacket))
				throw new Error('InitFileTransferH2DPacket failed');
			const fileSize = size !== null && size !== void 0 ? size : p1.fileSize;
			// console.log("size:", fileSize);
			const bufferChunkSize =
				p1.windowSize > 0 && p1.windowSize <= USER_PROG_CHUNK_SIZE
					? p1.windowSize
					: USER_PROG_CHUNK_SIZE;
			let bufferOffset = 0;
			let fileBuf = new Uint8Array(fileSize + bufferChunkSize);
			let lastBlock = false;
			while (!lastBlock) {
				if (fileSize <= bufferOffset + bufferChunkSize) {
					lastBlock = true;
				}
				const p2 = yield this.writeDataAsync(
					new ReadFileH2DPacket(nextAddress, bufferChunkSize),
					3000
				);
				if (!(p2 instanceof ReadFileReplyD2HPacket))
					throw new Error('ReadFileReplyD2HPacket failed');
				fileBuf.set(new Uint8Array(p2.buf), bufferOffset);
				if (progressCallback != null) progressCallback(bufferOffset, fileSize);
				// next chunk
				bufferOffset += bufferChunkSize;
				nextAddress += bufferChunkSize;
			}
			yield this.writeDataAsync(new ExitFileTransferH2DPacket(FileExitAction.EXIT_HALT), 30000);
			// console.log(p3);
			fileBuf = fileBuf.slice(0, fileSize);
			return fileBuf;
		});
	}
	uploadFileToDevice(request, progressCallback) {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			let { filename, buf, downloadTarget, vendor, loadAddress, exttype, autoRun, linkedFile } =
				request;
			if (buf === undefined) {
				// TODO: check connection status
				return false;
			}
			// no download to special capture or vision buffers
			// if (this.downloadTarget === VexDeviceWebSerial.FILE_TARGET_CBUF || this.downloadTarget === VexDeviceWebSerial.FILE_TARGET_VBUF) {
			//     // error !
			//     if (doneCallback != undefined) {
			//         doneCallback(false);
			//     }
			//     return;
			// }
			downloadTarget =
				downloadTarget !== null && downloadTarget !== void 0
					? downloadTarget
					: FileDownloadTarget.FILE_TARGET_QSPI;
			vendor = vendor !== null && vendor !== void 0 ? vendor : FileVendor.USER;
			let nextAddress =
				loadAddress !== null && loadAddress !== void 0 ? loadAddress : USER_FLASH_USR_CODE_START;
			// TODO if downloadTarget is FILE_TARGET_A1, FactoryEnable
			// TODO if buf.length > USER_FLASH_MAX_FILE_SIZE and downloadTarget is FILE_TARGET_QSPI, change to FILE_TARGET_DDR
			console.log('init file transfer', filename);
			const p1 = yield this.writeDataAsync(
				new InitFileTransferH2DPacket(
					FileInitAction.WRITE,
					downloadTarget,
					vendor,
					FileInitOption.OVERWRITE,
					buf,
					nextAddress,
					filename,
					exttype
				)
			);
			if (!(p1 instanceof InitFileTransferReplyD2HPacket))
				throw new Error('InitFileTransferH2DPacket failed');
			console.log(p1);
			if (linkedFile !== undefined) {
				const p3 = yield this.writeDataAsync(
					new LinkFileH2DPacket(
						(_a = linkedFile.vendor) !== null && _a !== void 0 ? _a : FileVendor.USER,
						linkedFile.filename,
						0
					),
					10000
				);
				if (!(p3 instanceof LinkFileReplyD2HPacket)) throw new Error('LinkFileH2DPacket failed');
			}
			const bufferChunkSize =
				p1.windowSize > 0 && p1.windowSize <= USER_PROG_CHUNK_SIZE
					? p1.windowSize
					: USER_PROG_CHUNK_SIZE;
			let bufferOffset = 0;
			let lastBlock = false;
			while (!lastBlock) {
				let tmpbuf;
				if (buf.byteLength - bufferOffset > bufferChunkSize) {
					tmpbuf = buf.subarray(bufferOffset, bufferOffset + bufferChunkSize);
				} else {
					// last chunk
					// word align length
					const length = ((buf.byteLength - bufferOffset + 3) / 4) >>> 0;
					tmpbuf = new Uint8Array(length * 4);
					tmpbuf.set(buf.subarray(bufferOffset, buf.byteLength));
					lastBlock = true;
				}
				const p2 = yield this.writeDataAsync(new WriteFileH2DPacket(nextAddress, tmpbuf), 3000);
				if (!(p2 instanceof WriteFileReplyD2HPacket))
					throw new Error('WriteFileReplyD2HPacket failed');
				console.log(p2);
				if (progressCallback != null) progressCallback(bufferOffset, buf.byteLength);
				// next chunk
				bufferOffset += bufferChunkSize;
				nextAddress += bufferChunkSize;
			}
			const p4 = yield this.writeDataAsync(
				new ExitFileTransferH2DPacket(autoRun ? FileExitAction.EXIT_RUN : FileExitAction.EXIT_HALT),
				30000
			);
			return p4 instanceof ExitFileTransferReplyD2HPacket;
		});
	}
	setMatchMode(mode) {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new UpdateMatchModeH2DPacket(mode, 0));
			return result instanceof MatchModeReplyD2HPacket ? result : null;
		});
	}
	loadProgram(value) {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(
				new LoadFileActionH2DPacket(FileVendor.USER, FileLoadAction.RUN, value)
			);
			return result instanceof LoadFileActionReplyD2HPacket ? result : null;
		});
	}
	stopProgram() {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(
				new LoadFileActionH2DPacket(FileVendor.USER, FileLoadAction.STOP, '')
			);
			return result instanceof LoadFileActionReplyD2HPacket ? result : null;
		});
	}
	mockTouch(x, y, press) {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new SendDashTouchH2DPacket(x, y, press));
			return result instanceof SendDashTouchReplyD2HPacket ? result : null;
		});
	}
	/** @param port untested */
	openScreen(screen, port) {
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield this.writeDataAsync(new SelectDashH2DPacket(screen, port));
			return result instanceof SendDashTouchReplyD2HPacket ? result : null;
		});
	}
}
function logData(data, limitedSize) {
	if (data === undefined) return;
	limitedSize || (limitedSize = data.length);
	let a = '';
	for (let n = 0; n < data.length && n < limitedSize; n++)
		a += ('00' + data[n].toString(16)).substr(-2, 2) + ' ';
	limitedSize < data.length && (a += ' ... ');
	// console.log(a);
	// XXX: NOT USED?
}
function binaryArrayJoin(left, right) {
	const leftSize = left != null ? left.byteLength : 0;
	const rightSize = right != null ? right.byteLength : 0;
	const all = new Uint8Array(leftSize + rightSize);
	return all.length === 0
		? new Uint8Array()
		: (left != null && all.set(new Uint8Array(left), 0),
			right != null && all.set(new Uint8Array(right), leftSize),
			all);
}

/* unzipit@1.4.0, license MIT */
/* global SharedArrayBuffer, process */

function readBlobAsArrayBuffer(blob) {
	if (blob.arrayBuffer) {
		return blob.arrayBuffer();
	}
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener('loadend', () => {
			resolve(reader.result);
		});
		reader.addEventListener('error', reject);
		reader.readAsArrayBuffer(blob);
	});
}

async function readBlobAsUint8Array(blob) {
	const arrayBuffer = await readBlobAsArrayBuffer(blob);
	return new Uint8Array(arrayBuffer);
}

function isBlob(v) {
	return typeof Blob !== 'undefined' && v instanceof Blob;
}

function isSharedArrayBuffer(b) {
	return typeof SharedArrayBuffer !== 'undefined' && b instanceof SharedArrayBuffer;
}

const isNode =
	typeof process !== 'undefined' &&
	process.versions &&
	typeof process.versions.node !== 'undefined' &&
	typeof process.versions.electron === 'undefined';

function isTypedArraySameAsArrayBuffer(typedArray) {
	return typedArray.byteOffset === 0 && typedArray.byteLength === typedArray.buffer.byteLength;
}

class ArrayBufferReader {
	constructor(arrayBufferOrView) {
		this.typedArray =
			arrayBufferOrView instanceof ArrayBuffer || isSharedArrayBuffer(arrayBufferOrView)
				? new Uint8Array(arrayBufferOrView)
				: new Uint8Array(
						arrayBufferOrView.buffer,
						arrayBufferOrView.byteOffset,
						arrayBufferOrView.byteLength
					);
	}
	async getLength() {
		return this.typedArray.byteLength;
	}
	async read(offset, length) {
		return new Uint8Array(this.typedArray.buffer, this.typedArray.byteOffset + offset, length);
	}
}

class BlobReader {
	constructor(blob) {
		this.blob = blob;
	}
	async getLength() {
		return this.blob.size;
	}
	async read(offset, length) {
		const blob = this.blob.slice(offset, offset + length);
		const arrayBuffer = await readBlobAsArrayBuffer(blob);
		return new Uint8Array(arrayBuffer);
	}
	async sliceAsBlob(offset, length, type = '') {
		return this.blob.slice(offset, offset + length, type);
	}
}

function inflate(data, buf) {
	var u8 = Uint8Array;
	if (data[0] == 3 && data[1] == 0) return buf ? buf : new u8(0);
	var bitsF = _bitsF,
		bitsE = _bitsE,
		decodeTiny = _decodeTiny,
		get17 = _get17;

	var noBuf = buf == null;
	if (noBuf) buf = new u8((data.length >>> 2) << 3);

	var BFINAL = 0,
		BTYPE = 0,
		HLIT = 0,
		HDIST = 0,
		HCLEN = 0,
		ML = 0,
		MD = 0;
	var off = 0,
		pos = 0;
	var lmap, dmap;

	while (BFINAL == 0) {
		BFINAL = bitsF(data, pos, 1);
		BTYPE = bitsF(data, pos + 1, 2);
		pos += 3;
		//console.log(BFINAL, BTYPE);

		if (BTYPE == 0) {
			if ((pos & 7) != 0) pos += 8 - (pos & 7);
			var p8 = (pos >>> 3) + 4,
				len = data[p8 - 4] | (data[p8 - 3] << 8); //console.log(len);//bitsF(data, pos, 16),
			if (noBuf) buf = _check(buf, off + len);
			buf.set(new u8(data.buffer, data.byteOffset + p8, len), off);
			//for(var i=0; i<len; i++) buf[off+i] = data[p8+i];
			//for(var i=0; i<len; i++) if(buf[off+i] != data[p8+i]) throw "e";
			pos = (p8 + len) << 3;
			off += len;
			continue;
		}
		if (noBuf) buf = _check(buf, off + (1 << 17)); // really not enough in many cases (but PNG and ZIP provide buffer in advance)
		if (BTYPE == 1) {
			lmap = U.flmap;
			dmap = U.fdmap;
			ML = (1 << 9) - 1;
			MD = (1 << 5) - 1;
		}
		if (BTYPE == 2) {
			HLIT = bitsE(data, pos, 5) + 257;
			HDIST = bitsE(data, pos + 5, 5) + 1;
			HCLEN = bitsE(data, pos + 10, 4) + 4;
			pos += 14;
			for (var i = 0; i < 38; i += 2) {
				U.itree[i] = 0;
				U.itree[i + 1] = 0;
			}
			var tl = 1;
			for (var i = 0; i < HCLEN; i++) {
				var l = bitsE(data, pos + i * 3, 3);
				U.itree[(U.ordr[i] << 1) + 1] = l;
				if (l > tl) tl = l;
			}
			pos += 3 * HCLEN; //console.log(itree);
			makeCodes(U.itree, tl);
			codes2map(U.itree, tl, U.imap);

			lmap = U.lmap;
			dmap = U.dmap;

			pos = decodeTiny(U.imap, (1 << tl) - 1, HLIT + HDIST, data, pos, U.ttree);
			var mx0 = _copyOut(U.ttree, 0, HLIT, U.ltree);
			ML = (1 << mx0) - 1;
			var mx1 = _copyOut(U.ttree, HLIT, HDIST, U.dtree);
			MD = (1 << mx1) - 1;

			//var ml = decodeTiny(U.imap, (1<<tl)-1, HLIT , data, pos, U.ltree); ML = (1<<(ml>>>24))-1;  pos+=(ml&0xffffff);
			makeCodes(U.ltree, mx0);
			codes2map(U.ltree, mx0, lmap);

			//var md = decodeTiny(U.imap, (1<<tl)-1, HDIST, data, pos, U.dtree); MD = (1<<(md>>>24))-1;  pos+=(md&0xffffff);
			makeCodes(U.dtree, mx1);
			codes2map(U.dtree, mx1, dmap);
		}
		//var ooff=off, opos=pos;
		while (true) {
			var code = lmap[get17(data, pos) & ML];
			pos += code & 15;
			var lit = code >>> 4; //U.lhst[lit]++;
			if (lit >>> 8 == 0) {
				buf[off++] = lit;
			} else if (lit == 256) {
				break;
			} else {
				var end = off + lit - 254;
				if (lit > 264) {
					var ebs = U.ldef[lit - 257];
					end = off + (ebs >>> 3) + bitsE(data, pos, ebs & 7);
					pos += ebs & 7;
				}
				//dst[end-off]++;

				var dcode = dmap[get17(data, pos) & MD];
				pos += dcode & 15;
				var dlit = dcode >>> 4;
				var dbs = U.ddef[dlit],
					dst = (dbs >>> 4) + bitsF(data, pos, dbs & 15);
				pos += dbs & 15;

				//var o0 = off-dst, stp = Math.min(end-off, dst);
				//if(stp>20) while(off<end) {  buf.copyWithin(off, o0, o0+stp);  off+=stp;  }  else
				//if(end-dst<=off) buf.copyWithin(off, off-dst, end-dst);  else
				//if(dst==1) buf.fill(buf[off-1], off, end);  else
				if (noBuf) buf = _check(buf, off + (1 << 17));
				while (off < end) {
					buf[off] = buf[off++ - dst];
					buf[off] = buf[off++ - dst];
					buf[off] = buf[off++ - dst];
					buf[off] = buf[off++ - dst];
				}
				off = end;
				//while(off!=end) {  buf[off]=buf[off++-dst];  }
			}
		}
		//console.log(off-ooff, (pos-opos)>>>3);
	}
	//console.log(dst);
	//console.log(tlen, dlen, off-tlen+tcnt);
	return buf.length == off ? buf : buf.slice(0, off);
}
function _check(buf, len) {
	var bl = buf.length;
	if (len <= bl) return buf;
	var nbuf = new Uint8Array(Math.max(bl << 1, len));
	nbuf.set(buf, 0);
	//for(var i=0; i<bl; i+=4) {  nbuf[i]=buf[i];  nbuf[i+1]=buf[i+1];  nbuf[i+2]=buf[i+2];  nbuf[i+3]=buf[i+3];  }
	return nbuf;
}

function _decodeTiny(lmap, LL, len, data, pos, tree) {
	var bitsE = _bitsE,
		get17 = _get17;
	var i = 0;
	while (i < len) {
		var code = lmap[get17(data, pos) & LL];
		pos += code & 15;
		var lit = code >>> 4;
		if (lit <= 15) {
			tree[i] = lit;
			i++;
		} else {
			var ll = 0,
				n = 0;
			if (lit == 16) {
				n = 3 + bitsE(data, pos, 2);
				pos += 2;
				ll = tree[i - 1];
			} else if (lit == 17) {
				n = 3 + bitsE(data, pos, 3);
				pos += 3;
			} else if (lit == 18) {
				n = 11 + bitsE(data, pos, 7);
				pos += 7;
			}
			var ni = i + n;
			while (i < ni) {
				tree[i] = ll;
				i++;
			}
		}
	}
	return pos;
}
function _copyOut(src, off, len, tree) {
	var mx = 0,
		i = 0,
		tl = tree.length >>> 1;
	while (i < len) {
		var v = src[i + off];
		tree[i << 1] = 0;
		tree[(i << 1) + 1] = v;
		if (v > mx) mx = v;
		i++;
	}
	while (i < tl) {
		tree[i << 1] = 0;
		tree[(i << 1) + 1] = 0;
		i++;
	}
	return mx;
}

function makeCodes(tree, MAX_BITS) {
	// code, length
	var max_code = tree.length;
	var code, bits, n, i, len;

	var bl_count = U.bl_count;
	for (var i = 0; i <= MAX_BITS; i++) bl_count[i] = 0;
	for (i = 1; i < max_code; i += 2) bl_count[tree[i]]++;

	var next_code = U.next_code; // smallest code for each length

	code = 0;
	bl_count[0] = 0;
	for (bits = 1; bits <= MAX_BITS; bits++) {
		code = (code + bl_count[bits - 1]) << 1;
		next_code[bits] = code;
	}

	for (n = 0; n < max_code; n += 2) {
		len = tree[n + 1];
		if (len != 0) {
			tree[n] = next_code[len];
			next_code[len]++;
		}
	}
}
function codes2map(tree, MAX_BITS, map) {
	var max_code = tree.length;
	var r15 = U.rev15;
	for (var i = 0; i < max_code; i += 2)
		if (tree[i + 1] != 0) {
			var lit = i >> 1;
			var cl = tree[i + 1],
				val = (lit << 4) | cl; // :  (0x8000 | (U.of0[lit-257]<<7) | (U.exb[lit-257]<<4) | cl);
			var rest = MAX_BITS - cl,
				i0 = tree[i] << rest,
				i1 = i0 + (1 << rest);
			//tree[i]=r15[i0]>>>(15-MAX_BITS);
			while (i0 != i1) {
				var p0 = r15[i0] >>> (15 - MAX_BITS);
				map[p0] = val;
				i0++;
			}
		}
}
function revCodes(tree, MAX_BITS) {
	var r15 = U.rev15,
		imb = 15 - MAX_BITS;
	for (var i = 0; i < tree.length; i += 2) {
		var i0 = tree[i] << (MAX_BITS - tree[i + 1]);
		tree[i] = r15[i0] >>> imb;
	}
}

function _bitsE(dt, pos, length) {
	return ((dt[pos >>> 3] | (dt[(pos >>> 3) + 1] << 8)) >>> (pos & 7)) & ((1 << length) - 1);
}
function _bitsF(dt, pos, length) {
	return (
		((dt[pos >>> 3] | (dt[(pos >>> 3) + 1] << 8) | (dt[(pos >>> 3) + 2] << 16)) >>> (pos & 7)) &
		((1 << length) - 1)
	);
}
/*
function _get9(dt, pos) {
	return ((dt[pos>>>3] | (dt[(pos>>>3)+1]<<8))>>>(pos&7))&511;
} */
function _get17(dt, pos) {
	// return at least 17 meaningful bytes
	return (dt[pos >>> 3] | (dt[(pos >>> 3) + 1] << 8) | (dt[(pos >>> 3) + 2] << 16)) >>> (pos & 7);
}
const U = (function () {
	var u16 = Uint16Array,
		u32 = Uint32Array;
	return {
		next_code: new u16(16),
		bl_count: new u16(16),
		ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
		of0: [
			3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
			163, 195, 227, 258, 999, 999, 999
		],
		exb: [
			0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0
		],
		ldef: new u16(32),
		df0: [
			1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
			2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535
		],
		dxb: [
			0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
			13, 0, 0
		],
		ddef: new u32(32),
		flmap: new u16(512),
		fltree: [],
		fdmap: new u16(32),
		fdtree: [],
		lmap: new u16(32768),
		ltree: [],
		ttree: [],
		dmap: new u16(32768),
		dtree: [],
		imap: new u16(512),
		itree: [],
		//rev9 : new u16(  512)
		rev15: new u16(1 << 15),
		lhst: new u32(286),
		dhst: new u32(30),
		ihst: new u32(19),
		lits: new u32(15000),
		strt: new u16(1 << 16),
		prev: new u16(1 << 15)
	};
})();

(function () {
	var len = 1 << 15;
	for (var i = 0; i < len; i++) {
		var x = i;
		x = ((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1);
		x = ((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2);
		x = ((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4);
		x = ((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8);
		U.rev15[i] = ((x >>> 16) | (x << 16)) >>> 17;
	}

	function pushV(tgt, n, sv) {
		while (n-- != 0) tgt.push(0, sv);
	}

	for (var i = 0; i < 32; i++) {
		U.ldef[i] = (U.of0[i] << 3) | U.exb[i];
		U.ddef[i] = (U.df0[i] << 4) | U.dxb[i];
	}

	pushV(U.fltree, 144, 8);
	pushV(U.fltree, 255 - 143, 9);
	pushV(U.fltree, 279 - 255, 7);
	pushV(U.fltree, 287 - 279, 8);
	/*
	var i = 0;
	for(; i<=143; i++) U.fltree.push(0,8);
	for(; i<=255; i++) U.fltree.push(0,9);
	for(; i<=279; i++) U.fltree.push(0,7);
	for(; i<=287; i++) U.fltree.push(0,8);
	*/
	makeCodes(U.fltree, 9);
	codes2map(U.fltree, 9, U.flmap);
	revCodes(U.fltree, 9);

	pushV(U.fdtree, 32, 5);
	//for(i=0;i<32; i++) U.fdtree.push(0,5);
	makeCodes(U.fdtree, 5);
	codes2map(U.fdtree, 5, U.fdmap);
	revCodes(U.fdtree, 5);

	pushV(U.itree, 19, 0);
	pushV(U.ltree, 286, 0);
	pushV(U.dtree, 30, 0);
	pushV(U.ttree, 320, 0);
	/*
	for(var i=0; i< 19; i++) U.itree.push(0,0);
	for(var i=0; i<286; i++) U.ltree.push(0,0);
	for(var i=0; i< 30; i++) U.dtree.push(0,0);
	for(var i=0; i<320; i++) U.ttree.push(0,0);
	*/
})();

const crc = {
	table: (function () {
		var tab = new Uint32Array(256);
		for (var n = 0; n < 256; n++) {
			var c = n;
			for (var k = 0; k < 8; k++) {
				if (c & 1) c = 0xedb88320 ^ (c >>> 1);
				else c = c >>> 1;
			}
			tab[n] = c;
		}
		return tab;
	})(),
	update: function (c, buf, off, len) {
		for (var i = 0; i < len; i++) c = crc.table[(c ^ buf[off + i]) & 0xff] ^ (c >>> 8);
		return c;
	},
	crc: function (b, o, l) {
		return crc.update(0xffffffff, b, o, l) ^ 0xffffffff;
	}
};

function inflateRaw(file, buf) {
	return inflate(file, buf);
}

/* global module */

const config = {
	numWorkers: 1,
	workerURL: '',
	useWorkers: false
};

let nextId = 0;
const waitingForWorkerQueue = [];

// Because Firefox uses non-standard onerror to signal an error.
function startWorker(url) {
	return new Promise((resolve, reject) => {
		const worker = new Worker(url);
		worker.onmessage = (e) => {
			if (e.data === 'start') {
				worker.onerror = undefined;
				worker.onmessage = undefined;
				resolve(worker);
			} else {
				reject(new Error(`unexpected message: ${e.data}`));
			}
		};
		worker.onerror = reject;
	});
}

function dynamicRequire(mod, request) {
	return mod.require(request);
}

(function () {
	if (false) {
		// We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
		const { Worker } = dynamicRequire(module, 'worker_threads');
		return {
			async createWorker(url) {
				return new Worker(url);
			},
			addEventListener(worker, fn) {
				worker.on('message', (data) => {
					fn({ target: worker, data });
				});
			},
			async terminate(worker) {
				await worker.terminate();
			}
		};
	} else {
		return {
			async createWorker(url) {
				// I don't understand this security issue
				// Apparently there is some iframe setting or http header
				// that prevents cross domain workers. But, I can manually
				// download the text and do it. I reported this to Chrome
				// and they said it was fine so ¯\_(ツ)_/¯
				try {
					const worker = await startWorker(url);
					return worker;
				} catch (e) {
					console.warn('could not load worker:', url);
				}

				let text;
				try {
					const req = await fetch(url, { mode: 'cors' });
					if (!req.ok) {
						throw new Error(`could not load: ${url}`);
					}
					text = await req.text();
					url = URL.createObjectURL(new Blob([text], { type: 'application/javascript' }));
					const worker = await startWorker(url);
					config.workerURL = url; // this is a hack. What's a better way to structure this code?
					return worker;
				} catch (e) {
					console.warn('could not load worker via fetch:', url);
				}

				if (text !== undefined) {
					try {
						url = `data:application/javascript;base64,${btoa(text)}`;
						const worker = await startWorker(url);
						config.workerURL = url;
						return worker;
					} catch (e) {
						console.warn('could not load worker via dataURI');
					}
				}

				console.warn('workers will not be used');
				throw new Error('can not start workers');
			},
			addEventListener(worker, fn) {
				worker.addEventListener('message', fn);
			},
			async terminate(worker) {
				worker.terminate();
			}
		};
	}
})();

// @param {Uint8Array} src
// @param {number} uncompressedSize
// @param {string} [type] mime-type
// @returns {ArrayBuffer|Blob} ArrayBuffer if type is falsy or Blob otherwise.
function inflateRawLocal(src, uncompressedSize, type, resolve) {
	const dst = new Uint8Array(uncompressedSize);
	inflateRaw(src, dst);
	resolve(type ? new Blob([dst], { type }) : dst.buffer);
}

async function processWaitingForWorkerQueue() {
	if (waitingForWorkerQueue.length === 0) {
		return;
	}

	// inflate locally
	// We loop here because what happens if many requests happen at once
	// the first N requests will try to async make a worker. Other requests
	// will then be on the queue. But if we fail to make workers then there
	// are pending requests.
	while (waitingForWorkerQueue.length) {
		const { src, uncompressedSize, type, resolve } = waitingForWorkerQueue.shift();
		let data = src;
		if (isBlob(src)) {
			data = await readBlobAsUint8Array(src);
		}
		inflateRawLocal(data, uncompressedSize, type, resolve);
	}
}

// It has to take non-zero time to put a large typed array in a Blob since the very
// next instruction you could change the contents of the array. So, if you're reading
// the zip file for images/video/audio then all you want is a Blob on which to get a URL.
// so that operation of putting the data in a Blob should happen in the worker.
//
// Conversely if you want the data itself then you want an ArrayBuffer immediately
// since the worker can transfer its ArrayBuffer zero copy.
//
// @param {Uint8Array|Blob} src
// @param {number} uncompressedSize
// @param {string} [type] falsy or mimeType string (eg: 'image/png')
// @returns {ArrayBuffer|Blob} ArrayBuffer if type is falsy or Blob otherwise.
function inflateRawAsync(src, uncompressedSize, type) {
	return new Promise((resolve, reject) => {
		// note: there is potential an expensive copy here. In order for the data
		// to make it into the worker we need to copy the data to the worker unless
		// it's a Blob or a SharedArrayBuffer.
		//
		// Solutions:
		//
		// 1. A minor enhancement, if `uncompressedSize` is small don't call the worker.
		//
		//    might be a win period as their is overhead calling the worker
		//
		// 2. Move the entire library to the worker
		//
		//    Good, Maybe faster if you pass a URL, Blob, or SharedArrayBuffer? Not sure about that
		//    as those are also easy to transfer. Still slow if you pass an ArrayBuffer
		//    as the ArrayBuffer has to be copied to the worker.
		//
		// I guess benchmarking is really the only thing to try.
		waitingForWorkerQueue.push({ src, uncompressedSize, type, resolve, reject, id: nextId++ });
		processWaitingForWorkerQueue();
	});
}

/*
class Zip {
  constructor(reader) {
    comment,  // the comment for this entry
    commentBytes, // the raw comment for this entry
  }
}
*/

function dosDateTimeToDate(date, time) {
	const day = date & 0x1f; // 1-31
	const month = ((date >> 5) & 0xf) - 1; // 1-12, 0-11
	const year = ((date >> 9) & 0x7f) + 1980; // 0-128, 1980-2108

	const millisecond = 0;
	const second = (time & 0x1f) * 2; // 0-29, 0-58 (even numbers)
	const minute = (time >> 5) & 0x3f; // 0-59
	const hour = (time >> 11) & 0x1f; // 0-23

	return new Date(year, month, day, hour, minute, second, millisecond);
}

class ZipEntry {
	constructor(reader, rawEntry) {
		this._reader = reader;
		this._rawEntry = rawEntry;
		this.name = rawEntry.name;
		this.nameBytes = rawEntry.nameBytes;
		this.size = rawEntry.uncompressedSize;
		this.compressedSize = rawEntry.compressedSize;
		this.comment = rawEntry.comment;
		this.commentBytes = rawEntry.commentBytes;
		this.compressionMethod = rawEntry.compressionMethod;
		this.lastModDate = dosDateTimeToDate(rawEntry.lastModFileDate, rawEntry.lastModFileTime);
		this.isDirectory = rawEntry.uncompressedSize === 0 && rawEntry.name.endsWith('/');
		this.encrypted = !!(rawEntry.generalPurposeBitFlag & 0x1);
		this.externalFileAttributes = rawEntry.externalFileAttributes;
		this.versionMadeBy = rawEntry.versionMadeBy;
	}
	// returns a promise that returns a Blob for this entry
	async blob(type = 'application/octet-stream') {
		return await readEntryDataAsBlob(this._reader, this._rawEntry, type);
	}
	// returns a promise that returns an ArrayBuffer for this entry
	async arrayBuffer() {
		return await readEntryDataAsArrayBuffer(this._reader, this._rawEntry);
	}
	// returns text, assumes the text is valid utf8. If you want more options decode arrayBuffer yourself
	async text() {
		const buffer = await this.arrayBuffer();
		return decodeBuffer(new Uint8Array(buffer));
	}
	// returns text with JSON.parse called on it. If you want more options decode arrayBuffer yourself
	async json() {
		const text = await this.text();
		return JSON.parse(text);
	}
}

const EOCDR_WITHOUT_COMMENT_SIZE = 22;
const MAX_COMMENT_SIZE = 0xffff; // 2-byte size
const EOCDR_SIGNATURE = 0x06054b50;
const ZIP64_EOCDR_SIGNATURE = 0x06064b50;

async function readAs(reader, offset, length) {
	return await reader.read(offset, length);
}

// The point of this function is we want to be able to pass the data
// to a worker as fast as possible so when decompressing if the data
// is already a blob and we can get a blob then get a blob.
//
// I'm not sure what a better way to refactor this is. We've got examples
// of multiple readers. Ideally, for every type of reader we could ask
// it, "give me a type that is zero copy both locally and when sent to a worker".
//
// The problem is the worker would also have to know the how to handle this
// opaque type. I suppose the correct solution is to register different
// reader handlers in the worker so BlobReader would register some
// `handleZeroCopyType<BlobReader>`. At the moment I don't feel like
// refactoring. As it is you just pass in an instance of the reader
// but instead you'd have to register the reader and some how get the
// source for the `handleZeroCopyType` handler function into the worker.
// That sounds like a huge PITA, requiring you to put the implementation
// in a separate file so the worker can load it or some other workaround
// hack.
//
// For now this hack works even if it's not generic.
async function readAsBlobOrTypedArray(reader, offset, length, type) {
	if (reader.sliceAsBlob) {
		return await reader.sliceAsBlob(offset, length, type);
	}
	return await reader.read(offset, length);
}

const crc$1 = {
	unsigned() {
		return 0;
	}
};

function getUint16LE(uint8View, offset) {
	return uint8View[offset] + uint8View[offset + 1] * 0x100;
}

function getUint32LE(uint8View, offset) {
	return (
		uint8View[offset] +
		uint8View[offset + 1] * 0x100 +
		uint8View[offset + 2] * 0x10000 +
		uint8View[offset + 3] * 0x1000000
	);
}

function getUint64LE(uint8View, offset) {
	return getUint32LE(uint8View, offset) + getUint32LE(uint8View, offset + 4) * 0x100000000;
}

/* eslint-disable no-irregular-whitespace */
// const decodeCP437 = (function() {
//   const cp437 = '\u0000☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ';
//
//   return function(uint8view) {
//     return Array.from(uint8view).map(v => cp437[v]).join('');
//   };
// }());
/* eslint-enable no-irregular-whitespace */

const utf8Decoder = new TextDecoder();
function decodeBuffer(uint8View, isUTF8) {
	/* eslint-disable-line no-unused-vars */ /* lgtm [js/superfluous-trailing-arguments] */
	if (isSharedArrayBuffer(uint8View.buffer)) {
		uint8View = new Uint8Array(uint8View);
	}
	return utf8Decoder.decode(uint8View);
	/*
  AFAICT the UTF8 flat is not set so it's 100% up to the user
  to self decode if their file is not utf8 filenames
  return isUTF8
      ? utf8Decoder.decode(uint8View)
      : decodeCP437(uint8View);
  */
}

async function findEndOfCentralDirector(reader, totalLength) {
	const size = Math.min(EOCDR_WITHOUT_COMMENT_SIZE + MAX_COMMENT_SIZE, totalLength);
	const readStart = totalLength - size;
	const data = await readAs(reader, readStart, size);
	for (let i = size - EOCDR_WITHOUT_COMMENT_SIZE; i >= 0; --i) {
		if (getUint32LE(data, i) !== EOCDR_SIGNATURE) {
			continue;
		}

		// 0 - End of central directory signature
		const eocdr = new Uint8Array(data.buffer, data.byteOffset + i, data.byteLength - i);
		// 4 - Number of this disk
		const diskNumber = getUint16LE(eocdr, 4);
		if (diskNumber !== 0) {
			throw new Error(`multi-volume zip files are not supported. This is volume: ${diskNumber}`);
		}

		// 6 - Disk where central directory starts
		// 8 - Number of central directory records on this disk
		// 10 - Total number of central directory records
		const entryCount = getUint16LE(eocdr, 10);
		// 12 - Size of central directory (bytes)
		const centralDirectorySize = getUint32LE(eocdr, 12);
		// 16 - Offset of start of central directory, relative to start of archive
		const centralDirectoryOffset = getUint32LE(eocdr, 16);
		// 20 - Comment length
		const commentLength = getUint16LE(eocdr, 20);
		const expectedCommentLength = eocdr.length - EOCDR_WITHOUT_COMMENT_SIZE;
		if (commentLength !== expectedCommentLength) {
			throw new Error(
				`invalid comment length. expected: ${expectedCommentLength}, actual: ${commentLength}`
			);
		}

		// 22 - Comment
		// the encoding is always cp437.
		const commentBytes = new Uint8Array(eocdr.buffer, eocdr.byteOffset + 22, commentLength);
		const comment = decodeBuffer(commentBytes);

		if (entryCount === 0xffff || centralDirectoryOffset === 0xffffffff) {
			return await readZip64CentralDirectory(reader, readStart + i, comment, commentBytes);
		} else {
			return await readEntries(
				reader,
				centralDirectoryOffset,
				centralDirectorySize,
				entryCount,
				comment,
				commentBytes
			);
		}
	}

	throw new Error('could not find end of central directory. maybe not zip file');
}

const END_OF_CENTRAL_DIRECTORY_LOCATOR_SIGNATURE = 0x07064b50;

async function readZip64CentralDirectory(reader, offset, comment, commentBytes) {
	// ZIP64 Zip64 end of central directory locator
	const zip64EocdlOffset = offset - 20;
	const eocdl = await readAs(reader, zip64EocdlOffset, 20);

	// 0 - zip64 end of central dir locator signature
	if (getUint32LE(eocdl, 0) !== END_OF_CENTRAL_DIRECTORY_LOCATOR_SIGNATURE) {
		throw new Error('invalid zip64 end of central directory locator signature');
	}

	// 4 - number of the disk with the start of the zip64 end of central directory
	// 8 - relative offset of the zip64 end of central directory record
	const zip64EocdrOffset = getUint64LE(eocdl, 8);
	// 16 - total number of disks

	// ZIP64 end of central directory record
	const zip64Eocdr = await readAs(reader, zip64EocdrOffset, 56);

	// 0 - zip64 end of central dir signature                           4 bytes  (0x06064b50)
	if (getUint32LE(zip64Eocdr, 0) !== ZIP64_EOCDR_SIGNATURE) {
		throw new Error('invalid zip64 end of central directory record signature');
	}
	// 4 - size of zip64 end of central directory record                8 bytes
	// 12 - version made by                                             2 bytes
	// 14 - version needed to extract                                   2 bytes
	// 16 - number of this disk                                         4 bytes
	// 20 - number of the disk with the start of the central directory  4 bytes
	// 24 - total number of entries in the central directory on this disk         8 bytes
	// 32 - total number of entries in the central directory            8 bytes
	const entryCount = getUint64LE(zip64Eocdr, 32);
	// 40 - size of the central directory                               8 bytes
	const centralDirectorySize = getUint64LE(zip64Eocdr, 40);
	// 48 - offset of start of central directory with respect to the starting disk number     8 bytes
	const centralDirectoryOffset = getUint64LE(zip64Eocdr, 48);
	// 56 - zip64 extensible data sector                                (variable size)
	return readEntries(
		reader,
		centralDirectoryOffset,
		centralDirectorySize,
		entryCount,
		comment,
		commentBytes
	);
}

const CENTRAL_DIRECTORY_FILE_HEADER_SIGNATURE = 0x02014b50;

async function readEntries(
	reader,
	centralDirectoryOffset,
	centralDirectorySize,
	rawEntryCount,
	comment,
	commentBytes
) {
	let readEntryCursor = 0;
	const allEntriesBuffer = await readAs(reader, centralDirectoryOffset, centralDirectorySize);
	const rawEntries = [];

	for (let e = 0; e < rawEntryCount; ++e) {
		const buffer = allEntriesBuffer.subarray(readEntryCursor, readEntryCursor + 46);
		// 0 - Central directory file header signature
		const signature = getUint32LE(buffer, 0);
		if (signature !== CENTRAL_DIRECTORY_FILE_HEADER_SIGNATURE) {
			throw new Error(
				`invalid central directory file header signature: 0x${signature.toString(16)}`
			);
		}
		const rawEntry = {
			// 4 - Version made by
			versionMadeBy: getUint16LE(buffer, 4),
			// 6 - Version needed to extract (minimum)
			versionNeededToExtract: getUint16LE(buffer, 6),
			// 8 - General purpose bit flag
			generalPurposeBitFlag: getUint16LE(buffer, 8),
			// 10 - Compression method
			compressionMethod: getUint16LE(buffer, 10),
			// 12 - File last modification time
			lastModFileTime: getUint16LE(buffer, 12),
			// 14 - File last modification date
			lastModFileDate: getUint16LE(buffer, 14),
			// 16 - CRC-32
			crc32: getUint32LE(buffer, 16),
			// 20 - Compressed size
			compressedSize: getUint32LE(buffer, 20),
			// 24 - Uncompressed size
			uncompressedSize: getUint32LE(buffer, 24),
			// 28 - File name length (n)
			fileNameLength: getUint16LE(buffer, 28),
			// 30 - Extra field length (m)
			extraFieldLength: getUint16LE(buffer, 30),
			// 32 - File comment length (k)
			fileCommentLength: getUint16LE(buffer, 32),
			// 34 - Disk number where file starts
			// 36 - Internal file attributes
			internalFileAttributes: getUint16LE(buffer, 36),
			// 38 - External file attributes
			externalFileAttributes: getUint32LE(buffer, 38),
			// 42 - Relative offset of local file header
			relativeOffsetOfLocalHeader: getUint32LE(buffer, 42)
		};

		if (rawEntry.generalPurposeBitFlag & 0x40) {
			throw new Error('strong encryption is not supported');
		}

		readEntryCursor += 46;

		const data = allEntriesBuffer.subarray(
			readEntryCursor,
			readEntryCursor +
				rawEntry.fileNameLength +
				rawEntry.extraFieldLength +
				rawEntry.fileCommentLength
		);
		rawEntry.nameBytes = data.slice(0, rawEntry.fileNameLength);
		rawEntry.name = decodeBuffer(rawEntry.nameBytes);

		// 46+n - Extra field
		const fileCommentStart = rawEntry.fileNameLength + rawEntry.extraFieldLength;
		const extraFieldBuffer = data.slice(rawEntry.fileNameLength, fileCommentStart);
		rawEntry.extraFields = [];
		let i = 0;
		while (i < extraFieldBuffer.length - 3) {
			const headerId = getUint16LE(extraFieldBuffer, i + 0);
			const dataSize = getUint16LE(extraFieldBuffer, i + 2);
			const dataStart = i + 4;
			const dataEnd = dataStart + dataSize;
			if (dataEnd > extraFieldBuffer.length) {
				throw new Error('extra field length exceeds extra field buffer size');
			}
			rawEntry.extraFields.push({
				id: headerId,
				data: extraFieldBuffer.slice(dataStart, dataEnd)
			});
			i = dataEnd;
		}

		// 46+n+m - File comment
		rawEntry.commentBytes = data.slice(
			fileCommentStart,
			fileCommentStart + rawEntry.fileCommentLength
		);
		rawEntry.comment = decodeBuffer(rawEntry.commentBytes);

		readEntryCursor += data.length;

		if (
			rawEntry.uncompressedSize === 0xffffffff ||
			rawEntry.compressedSize === 0xffffffff ||
			rawEntry.relativeOffsetOfLocalHeader === 0xffffffff
		) {
			// ZIP64 format
			// find the Zip64 Extended Information Extra Field
			const zip64ExtraField = rawEntry.extraFields.find((e) => e.id === 0x0001);
			if (!zip64ExtraField) {
				throw new Error('expected zip64 extended information extra field');
			}
			const zip64EiefBuffer = zip64ExtraField.data;
			let index = 0;
			// 0 - Original Size          8 bytes
			if (rawEntry.uncompressedSize === 0xffffffff) {
				if (index + 8 > zip64EiefBuffer.length) {
					throw new Error(
						'zip64 extended information extra field does not include uncompressed size'
					);
				}
				rawEntry.uncompressedSize = getUint64LE(zip64EiefBuffer, index);
				index += 8;
			}
			// 8 - Compressed Size        8 bytes
			if (rawEntry.compressedSize === 0xffffffff) {
				if (index + 8 > zip64EiefBuffer.length) {
					throw new Error(
						'zip64 extended information extra field does not include compressed size'
					);
				}
				rawEntry.compressedSize = getUint64LE(zip64EiefBuffer, index);
				index += 8;
			}
			// 16 - Relative Header Offset 8 bytes
			if (rawEntry.relativeOffsetOfLocalHeader === 0xffffffff) {
				if (index + 8 > zip64EiefBuffer.length) {
					throw new Error(
						'zip64 extended information extra field does not include relative header offset'
					);
				}
				rawEntry.relativeOffsetOfLocalHeader = getUint64LE(zip64EiefBuffer, index);
				index += 8;
			}
			// 24 - Disk Start Number      4 bytes
		}

		// check for Info-ZIP Unicode Path Extra Field (0x7075)
		// see https://github.com/thejoshwolfe/yauzl/issues/33
		const nameField = rawEntry.extraFields.find(
			(e) =>
				e.id === 0x7075 &&
				e.data.length >= 6 && // too short to be meaningful
				e.data[0] === 1 && // Version       1 byte      version of this extra field, currently 1
				getUint32LE(e.data, 1),
			crc$1.unsigned(rawEntry.nameBytes)
		); // NameCRC32     4 bytes     File Name Field CRC32 Checksum
		// > If the CRC check fails, this UTF-8 Path Extra Field should be
		// > ignored and the File Name field in the header should be used instead.
		if (nameField) {
			// UnicodeName Variable UTF-8 version of the entry File Name
			rawEntry.fileName = decodeBuffer(nameField.data.slice(5));
		}

		// validate file size
		if (rawEntry.compressionMethod === 0) {
			let expectedCompressedSize = rawEntry.uncompressedSize;
			if ((rawEntry.generalPurposeBitFlag & 0x1) !== 0) {
				// traditional encryption prefixes the file data with a header
				expectedCompressedSize += 12;
			}
			if (rawEntry.compressedSize !== expectedCompressedSize) {
				throw new Error(
					`compressed size mismatch for stored file: ${rawEntry.compressedSize} != ${expectedCompressedSize}`
				);
			}
		}
		rawEntries.push(rawEntry);
	}
	const zip = {
		comment,
		commentBytes
	};
	return {
		zip,
		entries: rawEntries.map((e) => new ZipEntry(reader, e))
	};
}

async function readEntryDataHeader(reader, rawEntry) {
	if (rawEntry.generalPurposeBitFlag & 0x1) {
		throw new Error('encrypted entries not supported');
	}
	const buffer = await readAs(reader, rawEntry.relativeOffsetOfLocalHeader, 30);
	// note: maybe this should be passed in or cached on entry
	// as it's async so there will be at least one tick (not sure about that)
	const totalLength = await reader.getLength();

	// 0 - Local file header signature = 0x04034b50
	const signature = getUint32LE(buffer, 0);
	if (signature !== 0x04034b50) {
		throw new Error(`invalid local file header signature: 0x${signature.toString(16)}`);
	}

	// all this should be redundant
	// 4 - Version needed to extract (minimum)
	// 6 - General purpose bit flag
	// 8 - Compression method
	// 10 - File last modification time
	// 12 - File last modification date
	// 14 - CRC-32
	// 18 - Compressed size
	// 22 - Uncompressed size
	// 26 - File name length (n)
	const fileNameLength = getUint16LE(buffer, 26);
	// 28 - Extra field length (m)
	const extraFieldLength = getUint16LE(buffer, 28);
	// 30 - File name
	// 30+n - Extra field
	const localFileHeaderEnd =
		rawEntry.relativeOffsetOfLocalHeader + buffer.length + fileNameLength + extraFieldLength;
	let decompress;
	if (rawEntry.compressionMethod === 0) {
		// 0 - The file is stored (no compression)
		decompress = false;
	} else if (rawEntry.compressionMethod === 8) {
		// 8 - The file is Deflated
		decompress = true;
	} else {
		throw new Error(`unsupported compression method: ${rawEntry.compressionMethod}`);
	}
	const fileDataStart = localFileHeaderEnd;
	const fileDataEnd = fileDataStart + rawEntry.compressedSize;
	if (rawEntry.compressedSize !== 0) {
		// bounds check now, because the read streams will probably not complain loud enough.
		// since we're dealing with an unsigned offset plus an unsigned size,
		// we only have 1 thing to check for.
		if (fileDataEnd > totalLength) {
			throw new Error(
				`file data overflows file bounds: ${fileDataStart} +  ${rawEntry.compressedSize}  > ${totalLength}`
			);
		}
	}
	return {
		decompress,
		fileDataStart
	};
}

async function readEntryDataAsArrayBuffer(reader, rawEntry) {
	const { decompress, fileDataStart } = await readEntryDataHeader(reader, rawEntry);
	if (!decompress) {
		const dataView = await readAs(reader, fileDataStart, rawEntry.compressedSize);
		// make copy?
		//
		// 1. The source is a Blob/file. In this case we'll get back TypedArray we can just hand to the user
		// 2. The source is a TypedArray. In this case we'll get back TypedArray that is a view into a larger buffer
		//    but because ultimately this is used to return an ArrayBuffer to `someEntry.arrayBuffer()`
		//    we need to return copy since we need the `ArrayBuffer`, not the TypedArray to exactly match the data.
		//    Note: We could add another API function `bytes()` or something that returned a `Uint8Array`
		//    instead of an `ArrayBuffer`. This would let us skip a copy here. But this case only happens for uncompressed
		//    data. That seems like a rare enough case that adding a new API is not worth it? Or is it? A zip of jpegs or mp3s
		//    might not be compressed. For now that's a TBD.
		return isTypedArraySameAsArrayBuffer(dataView) ? dataView.buffer : dataView.slice().buffer;
	}
	// see comment in readEntryDateAsBlob
	const typedArrayOrBlob = await readAsBlobOrTypedArray(
		reader,
		fileDataStart,
		rawEntry.compressedSize
	);
	const result = await inflateRawAsync(typedArrayOrBlob, rawEntry.uncompressedSize);
	return result;
}

async function readEntryDataAsBlob(reader, rawEntry, type) {
	const { decompress, fileDataStart } = await readEntryDataHeader(reader, rawEntry);
	if (!decompress) {
		const typedArrayOrBlob = await readAsBlobOrTypedArray(
			reader,
			fileDataStart,
			rawEntry.compressedSize,
			type
		);
		if (isBlob(typedArrayOrBlob)) {
			return typedArrayOrBlob;
		}
		return new Blob(
			[
				isSharedArrayBuffer(typedArrayOrBlob.buffer)
					? new Uint8Array(typedArrayOrBlob)
					: typedArrayOrBlob
			],
			{ type }
		);
	}
	// Here's the issue with this mess (should refactor?)
	// if the source is a blob then we really want to pass a blob to inflateRawAsync to avoid a large
	// copy if we're going to a worker.
	const typedArrayOrBlob = await readAsBlobOrTypedArray(
		reader,
		fileDataStart,
		rawEntry.compressedSize
	);
	const result = await inflateRawAsync(typedArrayOrBlob, rawEntry.uncompressedSize, type);
	return result;
}

async function unzipRaw(source) {
	let reader;
	if (typeof Blob !== 'undefined' && source instanceof Blob) {
		reader = new BlobReader(source);
	} else if (
		source instanceof ArrayBuffer ||
		(source && source.buffer && source.buffer instanceof ArrayBuffer)
	) {
		reader = new ArrayBufferReader(source);
	} else if (isSharedArrayBuffer(source) || isSharedArrayBuffer(source.buffer)) {
		reader = new ArrayBufferReader(source);
	} else if (typeof source === 'string') {
		const req = await fetch(source);
		if (!req.ok) {
			throw new Error(`failed http request ${source}, status: ${req.status}: ${req.statusText}`);
		}
		const blob = await req.blob();
		reader = new BlobReader(blob);
	} else if (typeof source.getLength === 'function' && typeof source.read === 'function') {
		reader = source;
	} else {
		throw new Error('unsupported source type');
	}

	const totalLength = await reader.getLength();

	if (totalLength > Number.MAX_SAFE_INTEGER) {
		throw new Error(
			`file too large. size: ${totalLength}. Only file sizes up 4503599627370496 bytes are supported`
		);
	}

	return await findEndOfCentralDirector(reader, totalLength);
}

// If the names are not utf8 you should use unzipitRaw
async function unzip(source) {
	const { zip, entries } = await unzipRaw(source);
	return {
		zip,
		entries: Object.fromEntries(entries.map((v) => [v.name, v]))
	};
}

function downloadFileFromInternet(link) {
	return __awaiter(this, void 0, void 0, function* () {
		return yield new Promise((resolve, reject) => {
			const oReq = new XMLHttpRequest();
			oReq.open('GET', link, true);
			oReq.responseType = 'arraybuffer';
			oReq.onload = function (_oEvent) {
				const arrayBuffer = oReq.response; // Note: not oReq.responseText
				resolve(arrayBuffer);
			};
			oReq.onerror = function (oEvent) {
				reject(oEvent);
			};
			oReq.send(null);
		});
	});
}
function sleepUntilAsync(f, timeout, interval = 20) {
	return __awaiter(this, void 0, void 0, function* () {
		return yield new Promise((resolve) => {
			let lastTime = new Date().getTime();
			let stopped = false;
			const stopper = setTimeout(() => {
				stopped = true;
				resolve(false);
			}, timeout);
			const checker = (val) => {
				if (stopped) return;
				if (val) {
					clearTimeout(stopper);
					resolve(true);
				} else if (new Date().getTime() - lastTime > interval) {
					lastTime = new Date().getTime();
					void f().then(checker);
				} else
					setTimeout(() => {
						lastTime = new Date().getTime();
						void f().then(checker);
					}, new Date().getTime() - lastTime);
			};
			void f().then(checker);
		});
	});
}
function sleepUntil(f, timeout, interval = 20) {
	return __awaiter(this, void 0, void 0, function* () {
		return yield new Promise((resolve) => {
			const timeWas = new Date().getTime();
			const wait = setInterval(function () {
				if (f()) {
					clearInterval(wait);
					resolve(true);
				} else if (new Date().getTime() - timeWas > timeout) {
					// Timeout
					clearInterval(wait);
					resolve(false);
				}
			}, interval);
		});
	});
}
function sleep(ms) {
	return __awaiter(this, void 0, void 0, function* () {
		return yield new Promise((resolve) => setTimeout(resolve, ms));
	});
}
class VexSerialDevice extends VexEventTarget {
	constructor(defaultSerial) {
		super();
		this.defaultSerial = defaultSerial;
	}
	get isConnected() {
		return this.connection != null ? this.connection.isConnected : false;
	}
	get deviceType() {
		var _a, _b;
		return this.isConnected
			? (_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.port) === null ||
				_b === void 0
				? void 0
				: _b.getInfo().usbProductId
			: undefined;
	}
}
class V5SerialDeviceState {
	constructor(instance) {
		this._isFileTransferring = false;
		this.brain = {
			activeProgram: 0,
			battery: {
				batteryPercent: 0,
				isCharging: false
			},
			button: {
				isPressed: false,
				isDoublePressed: false
			},
			cpu0Version: VexFirmwareVersion.allZero(),
			cpu1Version: VexFirmwareVersion.allZero(),
			isAvailable: false,
			settings: {
				isScreenReversed: false,
				isWhiteTheme: false,
				usingLanguage: 0
			},
			systemVersion: VexFirmwareVersion.allZero(),
			uniqueId: 0
		};
		this.controllers = [
			{
				battery: 0,
				isAvailable: false,
				isCharging: false
			},
			{
				battery: 0,
				isAvailable: false
			}
		];
		this.devices = [];
		this.isFieldControllerConnected = false;
		this.matchMode = 'disabled';
		this.radio = {
			channel: 0,
			isAvailable: false,
			isConnected: false,
			isVexNet: false,
			isRadioData: false,
			latency: 0,
			signalQuality: 0,
			signalStrength: 0
		};
		this._instance = instance;
	}
}
class V5Brain {
	constructor(state) {
		this.state = state;
	}
	get isRunningProgram() {
		return this.activeProgram !== 0;
	}
	get activeProgram() {
		return this.state.brain.activeProgram;
	}
	set activeProgram(value) {
		void (() =>
			__awaiter(this, void 0, void 0, function* () {
				if (this.state.brain.activeProgram === value) return;
				const conn = this.state._instance.connection;
				if (conn == null) return;
				const fn = value === 0 ? yield conn.stopProgram() : yield conn.loadProgram(value);
				if (fn != null) this.state.brain.activeProgram = value;
			}))();
	}
	get battery() {
		return new V5Battery(this.state);
	}
	get button() {
		return new V5BrainButton(this.state);
	}
	get cpu0Version() {
		return this.state.brain.cpu0Version;
	}
	get cpu1Version() {
		return this.state.brain.cpu1Version;
	}
	get isAvailable() {
		return this.state.brain.isAvailable;
	}
	get settings() {
		return new V5BrainSettings(this.state);
	}
	get systemVersion() {
		return this.state.brain.systemVersion;
	}
	get uniqueId() {
		return this.state.brain.uniqueId;
	}
	getValue(key) {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield (_a = this.state._instance.connection) === null || _a === void 0
				? void 0
				: _a.writeDataAsync(new ReadKeyValueH2DPacket(key));
			return result instanceof ReadKeyValueReplyD2HPacket ? result.value : undefined;
		});
	}
	setValue(key, value) {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield (_a = this.state._instance.connection) === null || _a === void 0
				? void 0
				: _a.writeDataAsync(new WriteKeyValueH2DPacket(key, value));
			return result instanceof WriteKeyValueReplyD2HPacket;
		});
	}
	listFiles(vendor = FileVendor.USER) {
		return __awaiter(this, void 0, void 0, function* () {
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return;
			const result = yield conn.writeDataAsync(new GetDirectoryFileCountH2DPacket(vendor));
			if (!(result instanceof GetDirectoryFileCountReplyD2HPacket)) return;
			const files = [];
			for (let i = 0; i < result.count; i++) {
				const result2 = yield conn.writeDataAsync(new GetDirectoryEntryH2DPacket(i));
				if (!(result2 instanceof GetDirectoryEntryReplyD2HPacket)) return;
				// .file is undefined if the file is not found
				// .file is a file entry but not a file handle
				if (result2.file != null) {
					files.push({
						filename: result2.file.filename,
						vendor,
						loadAddress: result2.file.loadAddress,
						size: result2.file.size,
						crc32: result2.file.crc32,
						type: result2.file.type,
						timestamp: result2.file.timestamp,
						version: result2.file.version
					});
				}
			}
			return files;
		});
	}
	listProgram() {
		var _a, _b;
		return __awaiter(this, void 0, void 0, function* () {
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return;
			const files = yield this.listFiles(FileVendor.USER);
			if (files === undefined) return;
			const programList = [];
			const iniFiles = files.filter((file) => {
				var _a;
				return (_a =
					(file === null || file === void 0 ? void 0 : file.filename.search(/.ini$/)) > 0) !==
					null && _a !== void 0
					? _a
					: false;
			});
			for (let i = 0; i < iniFiles.length; i++) {
				const ini = iniFiles[i];
				if (ini.size === 0) continue;
				const programName =
					(_b =
						(_a = /(.+?)(\.[^.]*$|$)/.exec(ini.filename)) === null || _a === void 0
							? void 0
							: _a[1]) !== null && _b !== void 0
						? _b
						: '';
				const bin = files.filter((e) => e != null && e.filename === programName + '.bin')[0];
				if (bin == null || bin.timestamp === 0 || bin.size === 0) continue;
				const n = new Date();
				n.setTime(1000 * bin.timestamp);
				const program = {
					name: programName,
					binfile: bin.filename,
					size: ini.size + bin.size,
					slot: -1,
					time: n,
					requestedSlot: -1
				};
				const result2 = yield conn === null || conn === void 0
					? void 0
					: conn.writeDataAsync(new GetProgramSlotInfoH2DPacket(FileVendor.USER, program.binfile));
				if (result2 instanceof GetProgramSlotInfoReplyD2HPacket) {
					program.slot = result2.slot;
					program.requestedSlot = result2.requestedSlot;
				}
				programList.push(program);
			}
			return programList;
		});
	}
	readFile(request, downloadTarget = FileDownloadTarget.FILE_TARGET_QSPI, progressCallback) {
		return __awaiter(this, void 0, void 0, function* () {
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return;
			this.state._isFileTransferring = true;
			let handle;
			// If request is a string, then it is a filename
			if (typeof request === 'string') {
				handle = { filename: request, vendor: FileVendor.USER };
			} else {
				handle = request;
			}
			try {
				return yield conn.downloadFileToHost(handle, downloadTarget, progressCallback);
			} catch (e) {
				this.state._isFileTransferring = false;
				throw e;
			}
		});
	}
	removeFile(request) {
		return __awaiter(this, void 0, void 0, function* () {
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return;
			let vendor, filename;
			// If request is a string, then it is a filename
			if (typeof request === 'string') {
				vendor = FileVendor.USER;
				filename = request;
			} else {
				vendor = request.vendor;
				filename = request.filename;
			}
			const result = yield conn.writeDataAsync(new EraseFileH2DPacket(vendor, filename));
			const result2 = yield conn.writeDataAsync(
				new ExitFileTransferH2DPacket(FileExitAction.EXIT_HALT)
			);
			if (!(result instanceof EraseFileReplyD2HPacket)) return false;
			if (!(result2 instanceof ExitFileTransferReplyD2HPacket)) return false;
			return true;
		});
	}
	removeAllFiles() {
		return __awaiter(this, void 0, void 0, function* () {
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return undefined;
			const result = yield conn.writeDataAsync(new FileClearUpH2DPacket(FileVendor.USER), 30000);
			return result instanceof FileClearUpReplyD2HPacket;
		});
	}
	uploadFirmware(
		publicUrl = 'https://content.vexrobotics.com/vexos/public/V5/',
		usingVersion,
		progressCallback
	) {
		return __awaiter(this, void 0, void 0, function* () {
			const device = this.state._instance;
			const conn = device.connection;
			if (conn == null || !conn.isConnected) return;
			const pcb =
				progressCallback !== null && progressCallback !== void 0 ? progressCallback : () => {};
			let vexos, bootBin, assertBin;
			try {
				if (usingVersion === undefined) {
					pcb('FETCH CATALOG', 0, 1);
					const catalog = yield downloadFileFromInternet(publicUrl + 'catalog.txt');
					const latestVersion = new TextDecoder().decode(catalog);
					usingVersion = latestVersion;
					pcb('FETCH CATALOG', 1, 1);
					console.log('fetched catalog.txt', latestVersion);
				}
				pcb('FETCH VEXOS', 0, 1);
				vexos = yield downloadFileFromInternet(publicUrl + usingVersion + '.vexos');
				pcb('FETCH VEXOS', 1, 1);
				pcb('UNZIP VEXOS', 0, 1);
				const { entries } = yield unzip(vexos);
				bootBin = yield entries[usingVersion + '/BOOT.bin'].arrayBuffer();
				assertBin = yield entries[usingVersion + '/assets.bin'].arrayBuffer();
				pcb('UNZIP VEXOS', 1, 1);
			} catch (e) {
				return undefined;
			}
			try {
				this.state._isFileTransferring = true;
				pcb('FACTORY ENB BOOT', 0, 0);
				const result = yield conn.writeDataAsync(new FactoryEnableH2DPacket());
				if (!(result instanceof FactoryEnableReplyD2HPacket)) return false;
				const bootWriteRequest = {
					filename: 'null.bin',
					vendor: FileVendor.USER,
					loadAddress: USER_FLASH_USR_CODE_START,
					buf: new Uint8Array(bootBin),
					downloadTarget: FileDownloadTarget.FILE_TARGET_B1,
					exttype: 'bin',
					autoRun: true,
					linkedFile: undefined
				};
				const result2 = yield conn.uploadFileToDevice(bootWriteRequest, (c, t) => {
					pcb('UPLOAD BOOT', c, t);
				});
				if (!result2) return false;
				while (true) {
					const result3 = yield conn.writeDataAsync(new FactoryStatusH2DPacket(), 10000);
					if (result3 instanceof FactoryStatusReplyD2HPacket) {
						switch (result3.status) {
							case 2:
								pcb('ERASE BOOT', result3.percent, 100);
								break;
							case 3:
								pcb('WRITE BOOT', result3.percent, 100);
								break;
							case 4:
								pcb('VERIFY BOOT', result3.percent, 100);
								break;
							case 8:
								pcb('FINISHING BOOT', result3.percent, 100);
								break;
						}
						if (result3.status === 0 && result3.percent === 100) break;
					} else {
						return false;
					}
					yield sleep(500);
				}
				pcb('FACTORY ENB ASSERT', 0, 0);
				const result5 = yield conn.writeDataAsync(new FactoryEnableH2DPacket());
				if (!(result5 instanceof FactoryEnableReplyD2HPacket)) return false;
				const assertWriteRequest = {
					filename: 'null.bin',
					vendor: FileVendor.USER,
					loadAddress: USER_FLASH_USR_CODE_START,
					buf: new Uint8Array(assertBin),
					downloadTarget: FileDownloadTarget.FILE_TARGET_A1,
					exttype: 'bin',
					autoRun: true,
					linkedFile: undefined
				};
				const result6 = yield conn.uploadFileToDevice(assertWriteRequest, (c, t) => {
					pcb('UPLOAD ASSERT', c, t);
				});
				if (!result6) return false;
				while (true) {
					const result7 = yield conn.writeDataAsync(new FactoryStatusH2DPacket(), 10000);
					if (result7 instanceof FactoryStatusReplyD2HPacket) {
						switch (result7.status) {
							case 2:
								pcb('ERASE ASSERT', result7.percent, 100);
								break;
							case 3:
								pcb('WRITE ASSERT', result7.percent, 100);
								break;
							case 4:
								pcb('VERIFY ASSERT', result7.percent, 100);
								break;
							case 8:
								pcb('FINISHING ASSERT', result7.percent, 100);
								break;
						}
						if (result7.status === 0 && result7.percent === 100) break;
					} else {
						return false;
					}
					yield sleep(500);
				}
			} catch (e) {
				this.state._isFileTransferring = false;
				throw e;
			}
			return true;
		});
	}
	uploadProgram(iniConfig, binFileBuf, coldFileBuf, progressCallback) {
		return __awaiter(this, void 0, void 0, function* () {
			const device = this.state._instance;
			const conn = device.connection;
			if (conn == null || !conn.isConnected) return;
			this.state._isFileTransferring = true;
			try {
				if (device.isV5Controller) {
					yield sleep(250);
					// V5 Controller doesn\'t appear to be connected to a V5 Brain
					if (!(yield device.refresh())) return;
					console.log('Transferring to download channel');
					const p1 = yield device.radio.changeChannel(RadioChannelType.DOWNLOAD);
					if (!p1) return false;
					yield sleep(250);
					yield sleepUntilAsync(
						() =>
							__awaiter(this, void 0, void 0, function* () {
								return (
									(yield conn === null || conn === void 0 ? void 0 : conn.getSystemStatus(150)) !=
									null
								);
							}),
						10000,
						200
					);
					console.log('Transferred to download channel');
				}
				const p2 = yield conn.uploadProgramToDevice(
					iniConfig,
					binFileBuf,
					coldFileBuf,
					progressCallback
				);
				if (!(p2 !== null && p2 !== void 0 ? p2 : false)) return false;
				if (device.isV5Controller) {
					// Disconnected
					if (!device.brain.isAvailable) return false;
					console.log('Transferring back to pit channel');
					const p3 = yield device.radio.changeChannel(RadioChannelType.PIT);
					if (!p3) return false;
					yield sleep(250);
					yield sleepUntilAsync(
						() =>
							__awaiter(this, void 0, void 0, function* () {
								return (
									(yield conn === null || conn === void 0 ? void 0 : conn.getSystemStatus(150)) !=
									null
								);
							}),
						10000,
						200
					);
					console.log('All done');
				}
				return true;
			} catch (e) {
				this.state._isFileTransferring = false;
				throw e;
			}
		});
	}
	writeFile(request, progressCallback) {
		return __awaiter(this, void 0, void 0, function* () {
			this.state._isFileTransferring = true;
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return undefined;
			try {
				return yield conn.uploadFileToDevice(request, progressCallback);
			} catch (e) {
				this.state._isFileTransferring = false;
				throw e;
			}
		});
	}
	/**
	 *
	 * @param progressCallback Informs the progress of the download.
	 * @returns array of bytes where each pixel is represented by 3 consecutive bytes (rgb).
	 * This array's length is 272 width * 480 height * 3 channels = 391680 bytes.
	 */
	captureScreen(progressCallback) {
		return __awaiter(this, void 0, void 0, function* () {
			// pros implementation: https://github.com/purduesigbots/pros-cli/blob/5ee18656faeb48f51d680bab4b53d5b59cc5a7d5/pros/serial/devices/vex/v5_device.py#L578
			const conn = this.state._instance.connection;
			if (conn == null || !conn.isConnected) return undefined;
			yield new Promise((resolve) => {
				conn.writeData(new ScreenCaptureH2DPacket(0), resolve);
			});
			const height = 272;
			const width = 480;
			const channels = 3;
			const messageWidth = 512; // brain goofiness
			const messageChannels = 4; // brain goofiness
			let buf = yield conn === null || conn === void 0
				? void 0
				: conn.downloadFileToHost(
						{
							filename: 'screen',
							vendor: FileVendor.SYS,
							loadAddress: 0,
							size: messageWidth * height * messageChannels // RGBA ig
						},
						FileDownloadTarget.FILE_TARGET_CBUF,
						progressCallback
					);
			if (buf == null) return;
			buf = buf
				// remove the extra columns
				.filter((_byte, i) => i % (messageWidth * messageChannels) < width * messageChannels)
				// remove the fake alpha channel
				.filter((_byte, i) => (i + 1) % messageChannels !== 0);
			// reverse the pixel (bgr -> rgb)
			for (let i = 0; i < buf.length; i += channels) {
				const px = buf.slice(i, i + channels).reverse();
				for (let j = 0; j < px.length; j++) {
					buf[i + j] = px[j];
				}
			}
			return buf;
		});
	}
}
class V5Battery {
	constructor(state) {
		this.state = state;
	}
	get batteryPercent() {
		return this.state.brain.battery.batteryPercent;
	}
	get isCharging() {
		return this.state.brain.battery.isCharging;
	}
}
class V5BrainButton {
	constructor(state) {
		this.state = state;
	}
	get isPressed() {
		return this.state.brain.button.isPressed;
	}
	get isDoublePressed() {
		return this.state.brain.button.isDoublePressed;
	}
}
class V5BrainSettings {
	constructor(state) {
		this.state = state;
	}
	get isScreenReversed() {
		return this.state.brain.settings.isScreenReversed;
	}
	get isWhiteTheme() {
		return this.state.brain.settings.isWhiteTheme;
	}
	get usingLanguage() {
		return this.state.brain.settings.usingLanguage;
	}
}
class V5Controller {
	constructor(state, controllerIndex) {
		this.state = state;
		this.controllerIndex = controllerIndex;
	}
	get batteryPercent() {
		return this.state.controllers[this.controllerIndex].battery;
	}
	get isMasterController() {
		return this.controllerIndex === 0;
	}
	get isAvailable() {
		return this.state.controllers[this.controllerIndex].isAvailable;
	}
	get isCharging() {
		return this.state.controllers[this.controllerIndex].isCharging;
	}
}
class V5SmartDevice {
	constructor(state, index) {
		this.state = state;
		this.deviceIndex = index;
	}
	getDeviceInfo() {
		return this.state.devices[this.deviceIndex];
	}
	get isAvailable() {
		return this.getDeviceInfo() !== undefined;
	}
	get port() {
		return this.deviceIndex;
	}
	get type() {
		var _a, _b;
		return (_b = (_a = this.getDeviceInfo()) === null || _a === void 0 ? void 0 : _a.type) !==
			null && _b !== void 0
			? _b
			: SmartDeviceType.EMPTY;
	}
	get version() {
		var _a, _b;
		return (_b = (_a = this.getDeviceInfo()) === null || _a === void 0 ? void 0 : _a.version) !==
			null && _b !== void 0
			? _b
			: 0;
	}
}
class V5Radio {
	constructor(state) {
		this.state = state;
	}
	get channel() {
		return this.state.radio.channel;
	}
	get isAvailable() {
		return this.state.radio.isAvailable;
	}
	get isConnected() {
		return this.state.radio.isConnected;
	}
	get isVexNet() {
		return this.state.radio.isVexNet;
	}
	get isRadioData() {
		return this.state.radio.isRadioData;
	}
	get latency() {
		return this.state.radio.latency;
	}
	changeChannel(channel) {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			const result = yield (_a = this.state._instance.connection) === null || _a === void 0
				? void 0
				: _a.writeDataAsync(new FileControlH2DPacket(1, channel));
			return result instanceof FileControlReplyD2HPacket;
		});
	}
}
class V5SerialDevice extends VexSerialDevice {
	constructor(defaultSerial) {
		super(defaultSerial);
		this.autoReconnect = true;
		this.autoRefresh = true;
		this.pauseRefreshOnFileTransfer = true;
		this._isReconnecting = false;
		this.state = new V5SerialDeviceState(this);
		let isLastRefreshComplete = true;
		setInterval(() => {
			if (this.autoRefresh && isLastRefreshComplete) {
				if (!this.isConnected) {
					this.state.brain.isAvailable = false;
					return;
				}
				if (this.pauseRefreshOnFileTransfer && !this.state._isFileTransferring) {
					isLastRefreshComplete = false;
					void this.refresh().finally(() => (isLastRefreshComplete = true));
				}
			}
		}, 200);
	}
	get isV5Controller() {
		return this.deviceType === SerialDeviceType.V5_CONTROLLER;
	}
	get brain() {
		return new V5Brain(this.state);
	}
	get controllers() {
		return [new V5Controller(this.state, 0), new V5Controller(this.state, 1)];
	}
	get devices() {
		const rtn = [];
		for (let i = 1; i <= this.state.devices.length; i++) {
			if (this.state.devices[i] != null) rtn.push(new V5SmartDevice(this.state, i));
		}
		return rtn;
	}
	get isFieldControllerConnected() {
		return this.state.isFieldControllerConnected;
	}
	get matchMode() {
		return this.state.matchMode;
	}
	set matchMode(value) {
		void (() =>
			__awaiter(this, void 0, void 0, function* () {
				var _a;
				if (
					(yield (_a = this.connection) === null || _a === void 0
						? void 0
						: _a.setMatchMode(value)) != null
				)
					this.state.matchMode = value;
			}))();
	}
	get radio() {
		return new V5Radio(this.state);
	}
	mockTouch(x, y, press) {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			return !(
				(yield (_a = this.connection) === null || _a === void 0
					? void 0
					: _a.mockTouch(x, y, press)) == null
			);
		});
	}
	connect(conn) {
		return __awaiter(this, void 0, void 0, function* () {
			if (this.isConnected) return true;
			if (conn != null && !conn.isConnected) {
				if ((yield conn.query1()) === null) return false;
				this.connection = conn;
			} else {
				let tryIdx = 0;
				while (true) {
					const c = new V5SerialConnection(this.defaultSerial);
					const result = yield c.open(tryIdx++, true);
					if (result === undefined) return false; // no port left
					if (!result) {
						// has been opened
						yield c.close();
						continue;
					}
					if ((yield c.query1()) === null) {
						// no response
						yield c.close();
						break;
					}
					this.connection = c;
					break;
				}
			}
			if (!this.isConnected) return false;
			yield this.doAfterConnect();
			return true;
		});
	}
	disconnect() {
		var _a;
		return __awaiter(this, void 0, void 0, function* () {
			yield (_a = this.connection) === null || _a === void 0 ? void 0 : _a.close();
			this.connection = undefined;
		});
	}
	/**
	 * @param timeout defaults to 0. If timeout is 0, then it will attempt to reconnect forever
	 * @returns
	 */
	reconnect(timeout = 0) {
		return __awaiter(this, void 0, void 0, function* () {
			if (this.isConnected) return true;
			if (timeout < 0) return false;
			const endTime = new Date().getTime() + timeout;
			if (this._isReconnecting) {
				let successBeforeTimeout;
				do {
					successBeforeTimeout = yield sleepUntil(
						() => !this._isReconnecting,
						timeout === 0 ? 1000 : timeout
					);
					// eslint-disable-next-line no-unmodified-loop-condition
				} while (timeout === 0 && !successBeforeTimeout);
				if (this.isConnected) return true;
				if (!successBeforeTimeout) return false;
			}
			this._isReconnecting = true;
			// eslint-disable-next-line no-unmodified-loop-condition
			while (timeout === 0 || new Date().getTime() < endTime) {
				// console.log("try to reconnect");
				let tryIdx = 0;
				while (true) {
					const c = new V5SerialConnection(this.defaultSerial);
					const result = yield c.open(tryIdx++, false);
					if (result === undefined) break; // no port left
					if (!result) {
						// has been opened
						yield c.close();
						continue;
					}
					const result2 = yield c.getSystemStatus(200);
					if (result2 === null) {
						// no response
						yield c.close();
						continue;
					}
					if (this.brain.uniqueId !== 0 && result2.uniqueId !== this.brain.uniqueId) {
						// uuid not match
						yield c.close();
						continue;
					}
					this.connection = c;
					break;
				}
				if (this.isConnected) break;
				// try again every second or when the number of ports is different
				const getPortCount = () =>
					__awaiter(this, void 0, void 0, function* () {
						return (yield this.defaultSerial.getPorts()).length;
					});
				const portsCount = yield getPortCount();
				yield sleepUntilAsync(
					() =>
						__awaiter(this, void 0, void 0, function* () {
							return (yield getPortCount()) !== portsCount;
						}),
					1000
				);
			}
			this._isReconnecting = false;
			if (!this.isConnected) return false;
			void this.doAfterConnect();
			return true;
		});
	}
	doAfterConnect() {
		return __awaiter(this, void 0, void 0, function* () {
			if (this.connection == null) return;
			console.log('doAfterConnect');
			this.connection.on('disconnected', (_data) => {
				if (this.autoReconnect) void this.reconnect();
			});
			yield this.refresh();
		});
	}
	refresh() {
		var _a, _b, _c, _d, _e, _f, _g;
		return __awaiter(this, void 0, void 0, function* () {
			const ssPacket = yield (_a = this.connection) === null || _a === void 0
				? void 0
				: _a.getSystemStatus();
			if (ssPacket == null) {
				this.state.brain.isAvailable = false;
				return false;
			}
			this.state.brain.cpu0Version = ssPacket.cpu0Version;
			this.state.brain.cpu1Version = ssPacket.cpu1Version;
			this.state.brain.systemVersion = ssPacket.systemVersion;
			const flags2 = ssPacket.sysflags[2];
			this.state.controllers[0].isCharging = (flags2 & 0b10000000) !== 0;
			this.state.matchMode =
				(flags2 & 0b00100000) !== 0
					? 'disabled'
					: (flags2 & 0b01000000) !== 0
						? 'autonomous'
						: 'driver';
			this.state.isFieldControllerConnected = (flags2 & 0b00010000) !== 0;
			const flags4 = ssPacket.sysflags[4];
			this.state.brain.settings.usingLanguage = (flags4 & 0b11110000) >> 4;
			this.state.brain.settings.isWhiteTheme = (flags4 & 0b00000100) !== 0;
			this.state.brain.settings.isScreenReversed = (flags4 & 0b00000001) === 0;
			this.state.brain.uniqueId = ssPacket.uniqueId;
			const sfPacket = yield (_b = this.connection) === null || _b === void 0
				? void 0
				: _b.getSystemFlags();
			if (sfPacket == null) return false;
			const flags5 = sfPacket.flags; // Math.pow(2, 32 - i);
			this.state.radio.isRadioData = (flags5 & Math.pow(2, 32 - 12)) !== 0;
			this.state.brain.button.isDoublePressed = (flags5 & Math.pow(2, 32 - 14)) !== 0;
			this.state.brain.battery.isCharging = (flags5 & Math.pow(2, 32 - 15)) !== 0;
			this.state.brain.button.isPressed = (flags5 & Math.pow(2, 32 - 17)) !== 0;
			this.state.radio.isVexNet = (flags5 & Math.pow(2, 32 - 18)) !== 0;
			this.state.controllers[1].isAvailable = (flags5 & Math.pow(2, 32 - 19)) !== 0;
			this.state.radio.isConnected = (flags5 & Math.pow(2, 32 - 22)) !== 0;
			this.state.radio.isAvailable = (flags5 & Math.pow(2, 32 - 23)) !== 0;
			this.state.brain.battery.batteryPercent =
				(_c = sfPacket.battery) !== null && _c !== void 0 ? _c : 0;
			this.state.controllers[0].isAvailable =
				this.state.radio.isConnected || this.state.controllers[0].isCharging;
			this.state.controllers[0].battery =
				(_d = sfPacket.controllerBatteryPercent) !== null && _d !== void 0 ? _d : 0;
			this.state.controllers[1].battery =
				(_e = sfPacket.partnerControllerBatteryPercent) !== null && _e !== void 0 ? _e : 0;
			this.state.brain.activeProgram = sfPacket.currentProgram;
			this.state.brain.isAvailable = !this.isV5Controller || this.state.radio.isConnected;
			const rdPacket = yield (_f = this.connection) === null || _f === void 0
				? void 0
				: _f.getRadioStatus();
			if (rdPacket == null) return false;
			this.state.radio.channel = rdPacket.channel;
			this.state.radio.latency = rdPacket.timeslot;
			this.state.radio.signalQuality = rdPacket.quality;
			this.state.radio.signalStrength = rdPacket.strength;
			const dsPacket = yield (_g = this.connection) === null || _g === void 0
				? void 0
				: _g.getDeviceStatus();
			if (dsPacket == null) return false;
			let missingPorts = this.state.devices
				.map((d) => (d === null || d === void 0 ? void 0 : d.port))
				.filter((p) => p !== undefined);
			for (let i = 0; i < dsPacket.devices.length; i++) {
				const device = dsPacket.devices[i];
				this.state.devices[device.port] = device;
				// remove device port from missing ports
				missingPorts = missingPorts.filter((p) => p !== device.port);
			}
			missingPorts.forEach((port) => {
				this.state.devices[port] = undefined;
			});
			return true;
		});
	}
}

// hey this code seemed really goofy to me, so I changed it,
// see https://github.com/LemLib/v5-serial-protocol/blob/ef8df5019a5504b5b96fc887ef1587d9ecaa84ea/src/VexIniConfig.ts
// for unchanged code
// -@meisZWFLZ
class BaseIniBuilder {
	constructor() {
		this.str = '';
	}
	addLine(line) {
		this.str += line + '\n';
	}
	addComment(comment) {
		this.addLine('; ' + comment);
		return this;
	}
	getContent() {
		return this.str;
	}
}
class IniSectionBuilder extends BaseIniBuilder {
	constructor(name, object, keyTransform = (k) => k.toString()) {
		super();
		this.name = name;
		this.object = object;
		this.keyTransform = keyTransform;
	}
	addSingleObjProperty(key, maxValueLength) {
		// if property is empty or nullish, skip it
		if (this.object[key] == null || this.object[key].toString().length === 0) return;
		const formattedKey = this.keyTransform(key).padEnd(12).slice(0, 12);
		const trimmedVal = this.object[key].toString().slice(0, maxValueLength);
		this.addLine(`${formattedKey} = "${trimmedVal}"`);
	}
	addObjProperty(key, maxValueLength) {
		const keys = Array.isArray(key) ? key : [key];
		for (const k of keys) {
			this.addSingleObjProperty(k, maxValueLength);
		}
		return this;
	}
	addAllObjProps(maxValueLength) {
		const keys = Object.keys(this.object);
		for (const k of keys) {
			this.addSingleObjProperty(k, maxValueLength);
		}
		return this;
	}
}
class IniFileBuilder extends BaseIniBuilder {
	addSection(section) {
		this.addLine(`[${section.name}]`);
		this.str += section.getContent();
		return this;
	}
}
class ProgramIniConfig {
	// private options: { [key: string]: string } = {};
	constructor() {
		this.baseName = 'slot_1';
		this.autorun = false;
		this.project = { version: '1', ide: 'Unknown', file: 'none' };
		this.program = {
			version: '1',
			name: 'program',
			slot: 0,
			icon: 'default.bmp',
			iconalt: '',
			description: '',
			date: '',
			timezone: '0'
		};
		this.config = {}; // { port_22: "..." }
		this.controller1 = {};
		this.controller2 = {};
		this.config = {
			22: 'adi'
		};
	}
	setProgramDate(date) {
		const d = date;
		this.program.date = d.toISOString();
		const tzo = Math.abs(d.getTimezoneOffset());
		const tzh = (tzo / 60) >>> 0;
		const tzm = tzo - tzh * 60;
		this.program.timezone =
			(d.getTimezoneOffset() > 0 ? '-' : '+') + this.dec2(tzh) + ':' + this.dec2(tzm);
	}
	createIni() {
		if (this.program.date.length === 0) {
			this.setProgramDate(new Date());
		}
		return new IniFileBuilder()
			.addComment('')
			.addComment('VEX program ini file')
			.addComment('Generated by Vex V5 Serial Protocol Library')
			.addComment('')
			.addSection(new IniSectionBuilder('project', this.project).addObjProperty('ide', 16))
			.addComment('')
			.addSection(
				new IniSectionBuilder('program', this.program)
					.addObjProperty('name', 32)
					.addObjProperty('description', 256)
					.addObjProperty('icon', 16)
					.addObjProperty('iconalt', 16)
					.addObjProperty('slot', 16)
			)
			.addComment('')
			.addSection(
				new IniSectionBuilder('config', this.config, (k) => 'port_' + this.dec2(k)).addAllObjProps()
			)
			.addComment('')
			.addSection(new IniSectionBuilder('controller_1', this.controller1).addAllObjProps())
			.addComment('')
			.addSection(new IniSectionBuilder('controller_2', this.controller2).addAllObjProps())
			.getContent();
	}
	dec2(value) {
		const str = ('00' + value.toString(10)).substr(-2, 2);
		return str.toUpperCase();
	}
}

export {
	AckType,
	CrcGenerator,
	DeviceBoundPacket,
	DisableDashH2DPacket,
	DisableDashReplyD2HPacket,
	EnableDashH2DPacket,
	EnableDashReplyD2HPacket,
	EraseFileH2DPacket,
	EraseFileReplyD2HPacket,
	ExitFileTransferH2DPacket,
	ExitFileTransferReplyD2HPacket,
	FactoryEnableH2DPacket,
	FactoryEnableReplyD2HPacket,
	FactoryStatusH2DPacket,
	FactoryStatusReplyD2HPacket,
	FileClearUpH2DPacket,
	FileClearUpReplyD2HPacket,
	FileControlH2DPacket,
	FileControlReplyD2HPacket,
	FileDownloadTarget,
	FileExitAction,
	FileFormatH2DPacket,
	FileFormatReplyD2HPacket,
	FileInitAction,
	FileInitOption,
	FileLoadAction,
	FileVendor,
	GetDeviceStatusH2DPacket,
	GetDeviceStatusReplyD2HPacket,
	GetDirectoryEntryH2DPacket,
	GetDirectoryEntryReplyD2HPacket,
	GetDirectoryFileCountH2DPacket,
	GetDirectoryFileCountReplyD2HPacket,
	GetFdtStatusH2DPacket,
	GetFdtStatusReplyD2HPacket,
	GetFileMetadataH2DPacket,
	GetFileMetadataReplyD2HPacket,
	GetLogCountH2DPacket,
	GetLogCountReplyD2HPacket,
	GetMatchStatusH2DPacket,
	GetProgramSlotInfoH2DPacket,
	GetProgramSlotInfoReplyD2HPacket,
	GetRadioModeH2DPacket,
	GetRadioStatusH2DPacket,
	GetRadioStatusReplyD2HPacket,
	GetSlot1to4InfoH2DPacket,
	GetSlot1to4InfoReplyD2HPacket,
	GetSlot5to8InfoH2DPacket,
	GetSlot5to8InfoReplyD2HPacket,
	GetSystemFlagsH2DPacket,
	GetSystemFlagsReplyD2HPacket,
	GetSystemStatusH2DPacket,
	GetSystemStatusReplyD2HPacket,
	GetUserDataH2DPacket,
	GetUserDataReplyD2HPacket,
	HostBoundPacket,
	InitFileTransferH2DPacket,
	InitFileTransferReplyD2HPacket,
	LinkFileH2DPacket,
	LinkFileReplyD2HPacket,
	LoadFileActionH2DPacket,
	LoadFileActionReplyD2HPacket,
	MatchModeReplyD2HPacket,
	MatchStatusReplyD2HPacket,
	Packet,
	PacketEncoder,
	PacketView,
	ProgramIniConfig,
	Query1H2DPacket,
	Query1ReplyD2HPacket,
	RadioChannelType,
	ReadFileH2DPacket,
	ReadFileReplyD2HPacket,
	ReadKeyValueH2DPacket,
	ReadKeyValueReplyD2HPacket,
	ReadLogPageH2DPacket,
	ReadLogPageReplyD2HPacket,
	ScreenCaptureH2DPacket,
	ScreenCaptureReplyD2HPacket,
	SelectDashH2DPacket,
	SelectDashReplyD2HPacket,
	SelectDashScreen,
	SendDashTouchH2DPacket,
	SendDashTouchReplyD2HPacket,
	SerialDeviceType,
	SetFileMetadataH2DPacket,
	SetFileMetadataReplyD2HPacket,
	SmartDeviceType,
	SystemVersionH2DPacket,
	SystemVersionReplyD2HPacket,
	USER_FLASH_END,
	USER_FLASH_END_B,
	USER_FLASH_END_C,
	USER_FLASH_MAX_FILE_SIZE,
	USER_FLASH_START,
	USER_FLASH_START_B,
	USER_FLASH_START_C,
	USER_FLASH_SYS_CODE_START,
	USER_FLASH_USR_CODE_START,
	USER_PROG_CHUNK_SIZE,
	UpdateMatchModeH2DPacket,
	V5Battery,
	V5Brain,
	V5BrainButton,
	V5BrainSettings,
	V5Controller,
	V5Radio,
	V5SerialConnection,
	V5SerialDevice,
	V5SmartDevice,
	VexEventEmitter,
	VexEventTarget,
	VexFirmwareVersion,
	VexSerialConnection,
	VexSerialDevice,
	WriteFileH2DPacket,
	WriteFileReplyD2HPacket,
	WriteKeyValueH2DPacket,
	WriteKeyValueReplyD2HPacket,
	downloadFileFromInternet,
	sleep,
	sleepUntil,
	sleepUntilAsync
};
//# sourceMappingURL=v5-protocol.js.map
