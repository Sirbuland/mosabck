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

ActiveRecord::Schema.define(version: 2018_12_13_191341) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "address_trackers", force: :cascade do |t|
    t.string "address_type"
    t.string "address"
    t.string "tags"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_address_trackers_on_user_id"
  end

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

  create_table "asset_mappings", force: :cascade do |t|
    t.bigint "exchange_id"
    t.bigint "research_id"
    t.bigint "merchant_id"
    t.bigint "event_id"
    t.bigint "wallet_id"
    t.bigint "video_id"
    t.bigint "crypto_asset_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "address_tracker_id"
    t.index ["address_tracker_id"], name: "index_asset_mappings_on_address_tracker_id"
    t.index ["crypto_asset_id"], name: "index_asset_mappings_on_crypto_asset_id"
    t.index ["event_id"], name: "index_asset_mappings_on_event_id"
    t.index ["exchange_id"], name: "index_asset_mappings_on_exchange_id"
    t.index ["merchant_id"], name: "index_asset_mappings_on_merchant_id"
    t.index ["research_id"], name: "index_asset_mappings_on_research_id"
    t.index ["video_id"], name: "index_asset_mappings_on_video_id"
    t.index ["wallet_id"], name: "index_asset_mappings_on_wallet_id"
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

  create_table "author_researches", force: :cascade do |t|
    t.bigint "research_id"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_author_researches_on_author_id"
    t.index ["research_id"], name: "index_author_researches_on_research_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coins", force: :cascade do |t|
    t.string "text"
    t.string "value"
    t.boolean "selected"
    t.bigint "dashboard_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dashboard_id"], name: "index_coins_on_dashboard_id"
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

  create_table "crypto_assets", force: :cascade do |t|
    t.string "name"
    t.string "attribute1"
    t.string "attribute2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "events", force: :cascade do |t|
    t.bigint "user_id"
    t.string "event_type"
    t.text "description"
    t.string "importance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "event_date"
    t.string "event_title"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "exchanges", force: :cascade do |t|
    t.string "exchange"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "vetted"
    t.index ["user_id"], name: "index_exchanges_on_user_id"
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

  create_table "keyword_research_videos", force: :cascade do |t|
    t.bigint "keyword_id"
    t.bigint "research_id"
    t.bigint "video_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["keyword_id"], name: "index_keyword_research_videos_on_keyword_id"
    t.index ["research_id"], name: "index_keyword_research_videos_on_research_id"
    t.index ["video_id"], name: "index_keyword_research_videos_on_video_id"
  end

  create_table "keywords", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "merchants", force: :cascade do |t|
    t.bigint "user_id"
    t.string "asset_processor"
    t.string "merchant"
    t.string "source_url"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_merchants_on_user_id"
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

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "second_name"
    t.text "description"
    t.string "attribute1"
    t.string "attribute2"
    t.bigint "video_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["video_id"], name: "index_people_on_video_id"
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

  create_table "researches", force: :cascade do |t|
    t.bigint "user_id"
    t.string "research_type"
    t.string "source_url"
    t.string "title"
    t.text "description"
    t.string "reference"
    t.string "file_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "date_authored"
    t.bigint "crypto_asset_id"
    t.integer "rating", default: 0
    t.integer "cached_votes_total", default: 0
    t.integer "cached_votes_score", default: 0
    t.integer "cached_votes_up", default: 0
    t.integer "cached_votes_down", default: 0
    t.integer "cached_weighted_score", default: 0
    t.integer "cached_weighted_total", default: 0
    t.float "cached_weighted_average", default: 0.0
    t.index ["crypto_asset_id"], name: "index_researches_on_crypto_asset_id"
    t.index ["user_id"], name: "index_researches_on_user_id"
  end

  create_table "resources", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "attribute1"
    t.string "attribute2"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_resources_on_event_id"
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
    t.string "profession"
    t.string "description"
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

  create_table "videos", force: :cascade do |t|
    t.bigint "user_id"
    t.string "video_type"
    t.string "title"
    t.string "timestamp"
    t.text "description"
    t.string "source_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_videos_on_user_id"
  end

  create_table "votes", id: :serial, force: :cascade do |t|
    t.string "votable_type"
    t.integer "votable_id"
    t.string "voter_type"
    t.integer "voter_id"
    t.boolean "vote_flag"
    t.string "vote_scope"
    t.integer "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope"
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope"
  end

  create_table "wallets", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "number_major_wallets"
    t.string "number_mobile_wallets"
    t.text "description"
    t.string "image_link"
    t.string "source_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "entry_date"
    t.index ["user_id"], name: "index_wallets_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "address_trackers", "users"
  add_foreign_key "asset_mappings", "crypto_assets"
  add_foreign_key "asset_mappings", "events"
  add_foreign_key "asset_mappings", "exchanges"
  add_foreign_key "asset_mappings", "merchants"
  add_foreign_key "asset_mappings", "researches"
  add_foreign_key "asset_mappings", "videos"
  add_foreign_key "asset_mappings", "wallets"
  add_foreign_key "auth_identities", "users"
  add_foreign_key "author_researches", "researches"
  add_foreign_key "coins", "dashboards"
  add_foreign_key "contact_methods", "users"
  add_foreign_key "dashboards", "users"
  add_foreign_key "events", "users"
  add_foreign_key "exchanges", "users"
  add_foreign_key "installations", "users"
  add_foreign_key "keyword_research_videos", "keywords"
  add_foreign_key "keyword_research_videos", "researches"
  add_foreign_key "keyword_research_videos", "videos"
  add_foreign_key "merchants", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "panel_vars", "panels"
  add_foreign_key "panel_vars", "vars"
  add_foreign_key "panels", "dashboards"
  add_foreign_key "people", "videos"
  add_foreign_key "pin_codes", "users"
  add_foreign_key "researches", "users"
  add_foreign_key "resources", "events"
  add_foreign_key "roles_users", "roles"
  add_foreign_key "roles_users", "users", on_delete: :cascade
  add_foreign_key "screeners", "users"
  add_foreign_key "tokens", "installations"
  add_foreign_key "user_devices", "users"
  add_foreign_key "videos", "users"
  add_foreign_key "wallets", "users"
end
