extends ColorRect
class_name ItemRect

@onready var item_label = $ItemLabel

const LABEL_SETTINGS = preload("res://assets/32_White_KAR.tres")

var _item_name: String
var _dropped_on_target: bool = false

func get_item_label() -> String:
	return item_label.text

func _ready():
	_item_name = GameManager.START_ITEMS.keys().pick_random()
	item_label.text = _item_name


##DRAGGABLE FUNCTIONS

func _get_drag_data(at_position: Vector2):
	print("get_drag_data ", item_label.text)
	if not _dropped_on_target:
		set_drag_preview(_get_preview_control())
	return self
	
func _on_item_dropped_on_target(item_rect):
	print("dropped on target recieved")

func _get_preview_control() -> Control:
	var rotation_amt = .1
	
	var label = Label.new()
	label.label_settings = LABEL_SETTINGS
	label.text = _item_name
	label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	label.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	label.size.x = 46
	label.size.y = 46
	label.anchors_preset = PRESET_FULL_RECT
	label.rotation = rotation_amt
	var preview = ColorRect.new()
	preview.size = size
	var preview_color = color
	preview_color.a = .8
	preview.color = preview_color
	preview.set_rotation(rotation_amt)
	
	preview.add_child(label)
	return preview
	
	

func _can_drop_data(at_position: Vector2, data) -> bool:
	if data.get_item_label() == self.get_item_label():
		print("DROP")
		return true
	print("CANT DROP")
	return false

func _drop_data(at_position, data):
	_dropped_on_target = true
	print("drop data")
