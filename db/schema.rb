# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181130183014) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "app_settings", force: :cascade do |t|
    t.string "name"
    t.boolean "active", default: false
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "approved_users", force: :cascade do |t|
    t.string "email", limit: 255, null: false
    t.index ["email"], name: "index_approved_users_on_email"
  end

  create_table "auth_identities", force: :cascade do |t|
    t.bigint "user_id"
    t.json "payload"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "active"
    t.string "type"
    t.index ["user_id"], name: "index_auth_identities_on_user_id"
  end

  create_table "contact_methods", force: :cascade do |t|
    t.bigint "user_id"
    t.string "type"
    t.boolean "main", default: false
    t.boolean "verified", default: false
    t.boolean "confirmed", default: false
    t.boolean "use_for_newsletter", default: false
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_contact_methods_on_user_id"
  end

  create_table "dashboards", force: :cascade do |t|
    t.string "uid"
    t.string "title"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["user_id"], name: "index_dashboards_on_user_id"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.text "message"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "additional_info", default: "{}"
    t.index ["user_id"], name: "index_feedbacks_on_user_id"
  end

  create_table "installations", force: :cascade do |t|
    t.bigint "user_id"
    t.string "device_type"
    t.string "app_version"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_installations_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "country"
    t.string "countryCode"
    t.string "city"
    t.string "street"
    t.string "streetNumber"
    t.string "zip"
    t.string "timeZone"
    t.geometry "lonlat", limit: {:srid=>4326, :type=>"st_point"}
    t.string "locateable_type"
    t.bigint "locateable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locateable_type", "locateable_id"], name: "index_locations_on_locateable_type_and_locateable_id"
    t.index ["lonlat"], name: "index_locations_on_lonlat", using: :gist
  end

  create_table "notifications", force: :cascade do |t|
    t.string "message"
    t.string "status"
    t.string "date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "panel_vars", force: :cascade do |t|
    t.bigint "panel_id"
    t.bigint "var_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["panel_id"], name: "index_panel_vars_on_panel_id"
    t.index ["var_id"], name: "index_panel_vars_on_var_id"
  end

  create_table "panels", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "dashboard_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.integer "graf_panel_id"
    t.string "graf_dash_uri"
    t.bigint "start_date"
    t.bigint "end_date"
    t.index ["dashboard_id"], name: "index_panels_on_dashboard_id"
  end

  create_table "pin_codes", force: :cascade do |t|
    t.bigint "user_id"
    t.date "expiration_date"
    t.string "action"
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "active"
    t.integer "auth_identity_id"
    t.index ["user_id"], name: "index_pin_codes_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.json "schema", default: {}
    t.string "name"
    t.string "description"
    t.integer "priority"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_roles_on_name", unique: true
  end

  create_table "roles_users", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_roles_users_on_role_id"
    t.index ["user_id"], name: "index_roles_users_on_user_id"
  end

  create_table "screeners", force: :cascade do |t|
    t.string "name", limit: 255
    t.string "text"
    t.jsonb "filters", default: "[]"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_screeners_on_user_id"
  end

  create_table "tokens", force: :cascade do |t|
    t.bigint "installation_id"
    t.string "token"
    t.string "token_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["installation_id"], name: "index_tokens_on_installation_id"
  end

  create_table "triggered_events", force: :cascade do |t|
    t.string "tracked_event_action"
    t.string "status"
    t.string "message"
    t.json "payload", default: {"phone"=>"all", "email"=>"all"}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "notification_rules", default: {"email"=>true, "phone"=>true, "gcm"=>true, "apns"=>true, "expo"=>true}
  end

  create_table "user_devices", force: :cascade do |t|
    t.bigint "user_id"
    t.string "device_id"
    t.boolean "logged_in"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_devices_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "bio"
    t.string "username"
    t.integer "auth_identity_id"
    t.string "password"
    t.string "avatar_url"
    t.boolean "subscribed_to_newsletter", default: false
    t.datetime "birthdate"
    t.string "confirm_token"
    t.json "rules", default: {"admin_panel"=>false, "users"=>{"create"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "update"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "delete"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "read"=>{"0"=>true, "1"=>true, "50"=>true, "75"=>true, "100"=>true}}, "auth_identities"=>{"create"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "update"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "delete"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "read"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}}, "posts"=>{"create"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "update"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "delete"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "read"=>{"0"=>true, "1"=>true, "50"=>true, "75"=>true, "100"=>true}}, "chat_groups"=>{"create"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "update"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "delete"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "read"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}}, "comments"=>{"create"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "update"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "delete"=>{"0"=>true, "1"=>false, "50"=>false, "75"=>false, "100"=>false}, "read"=>{"0"=>true, "1"=>true, "50"=>true, "75"=>true, "100"=>true}}}
    t.boolean "sms_verified", default: false
    t.string "pin"
    t.string "backgound_img_url"
    t.string "first_name"
    t.string "last_name"
    t.string "sex", default: "Not decided"
    t.boolean "hidden", default: false
    t.index ["auth_identity_id"], name: "index_users_on_auth_identity_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "vars", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "value"
  end

  add_foreign_key "auth_identities", "users"
  add_foreign_key "contact_methods", "users"
  add_foreign_key "dashboards", "users"
  add_foreign_key "installations", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "panel_vars", "panels"
  add_foreign_key "panel_vars", "vars"
  add_foreign_key "panels", "dashboards"
  add_foreign_key "pin_codes", "users"
  add_foreign_key "roles_users", "roles"
  add_foreign_key "roles_users", "users", on_delete: :cascade
  add_foreign_key "screeners", "users"
  add_foreign_key "tokens", "installations"
  add_foreign_key "user_devices", "users"
end
